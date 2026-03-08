// CHARACTER-LOADER.JS - Renders character pages from videos.js
// ============================================

const VIDEOS_PER_PAGE = 12;
let currentSoloPage = 1;
let currentMultiPage = 1;

function getCharacterKey() {
  const bodyKey = document.body.dataset.character;
  if (bodyKey) return bodyKey;
  
  const path = window.location.pathname;
  const match = path.match(/\/characters\/(\w+)\.html/);
  return match ? match[1] : null;
}

function initCharacterPage() {
  const charKey = getCharacterKey();
  
  if (!charKey || !CHARACTERS[charKey]) {
    console.error('Character not found:', charKey);
    document.getElementById('solo-videos-grid').innerHTML = 
      '<div class="error-message">Character not found. Check the URL or data-character attribute.</div>';
    return;
  }
  
  const character = CHARACTERS[charKey];
  const soloVideos = VIDEO_DB.solo[charKey] || [];
  const multiVideos = getMultiVideosForCharacter(charKey);
  
  renderHeader(character);
  renderSoloVideos(soloVideos, charKey);
  renderMultiVideos(multiVideos, charKey);
  document.title = `${character.name} | Gerch-Verse`;
}

function renderHeader(character) {
  const headerEl = document.getElementById('character-header');
  if (!headerEl) return;
  
  headerEl.innerHTML = `
    <img src="${character.avatar}" alt="${character.name}" class="char-avatar" 
         onerror="this.src='../images/default-avatar.jpg'">
    <div class="char-info">
      <h1>${character.name}</h1>
      <p class="char-handle">${character.handle}</p>
      <p class="char-role">${character.role}</p>
      <div class="char-stats">
        <span class="stat">${(VIDEO_DB.solo[getCharacterKey()] || []).length} Solo Videos</span>
        <span class="stat">${getMultiVideosForCharacter(getCharacterKey()).length} Multi Videos</span>
      </div>
    </div>
  `;
  
  document.documentElement.style.setProperty('--char-color', character.color);
}

function renderSoloVideos(videos, charKey) {
  const gridEl = document.getElementById('solo-videos-grid');
  const paginationEl = document.getElementById('solo-pagination');
  const countEl = document.getElementById('solo-count');
  
  if (!gridEl) return;
  if (countEl) countEl.textContent = videos.length;
  
  if (videos.length === 0) {
    gridEl.innerHTML = '<div class="empty-message">No solo videos yet. Check back soon!</div>';
    if (paginationEl) paginationEl.style.display = 'none';
    return;
  }
  
  const totalPages = Math.ceil(videos.length / VIDEOS_PER_PAGE);
  const startIdx = (currentSoloPage - 1) * VIDEOS_PER_PAGE;
  const endIdx = startIdx + VIDEOS_PER_PAGE;
  const visibleVideos = videos.slice(startIdx, endIdx);
  
  // Build HTML string properly
  let html = '';
  for (const video of visibleVideos) {
    html += renderVideoCard(video);
  }
  gridEl.innerHTML = html;
  
  if (paginationEl) {
    if (totalPages > 1) {
      paginationEl.style.display = 'flex';
      paginationEl.innerHTML = `
        <button class="page-btn" onclick="changeSoloPage(-1)" ${currentSoloPage === 1 ? 'disabled' : ''}>◀ Prev</button>
        <span class="page-info">Page ${currentSoloPage} of ${totalPages}</span>
        <button class="page-btn" onclick="changeSoloPage(1)" ${currentSoloPage === totalPages ? 'disabled' : ''}>Next ▶</button>
      `;
    } else {
      paginationEl.style.display = 'none';
    }
  }
}

function renderMultiVideos(videos, charKey) {
  const sectionEl = document.getElementById('multi-videos-section');
  const gridEl = document.getElementById('multi-videos-grid');
  const paginationEl = document.getElementById('multi-pagination');
  const countEl = document.getElementById('multi-count');
  
  if (!sectionEl || !gridEl) return;
  if (countEl) countEl.textContent = videos.length;
  
  if (videos.length === 0) {
    sectionEl.style.display = 'none';
    return;
  }
  
  sectionEl.style.display = 'block';
  
  const totalPages = Math.ceil(videos.length / VIDEOS_PER_PAGE);
  const startIdx = (currentMultiPage - 1) * VIDEOS_PER_PAGE;
  const endIdx = startIdx + VIDEOS_PER_PAGE;
  const visibleVideos = videos.slice(startIdx, endIdx);
  
  // Build HTML string properly
  let html = '';
  for (const video of visibleVideos) {
    const coStars = video.characters.filter(c => c !== charKey);
    html += renderVideoCard(video, coStars);
  }
  gridEl.innerHTML = html;
  
  if (paginationEl) {
    if (totalPages > 1) {
      paginationEl.style.display = 'flex';
      paginationEl.innerHTML = `
        <button class="page-btn" onclick="changeMultiPage(-1)" ${currentMultiPage === 1 ? 'disabled' : ''}>◀ Prev</button>
        <span class="page-info">Page ${currentMultiPage} of ${totalPages}</span>
        <button class="page-btn" onclick="changeMultiPage(1)" ${currentMultiPage === totalPages ? 'disabled' : ''}>Next ▶</button>
      `;
    } else {
      paginationEl.style.display = 'none';
    }
  }
}

// ============================================
// RENDER VIDEO CARD - FIXED STRUCTURE
// ============================================
function renderVideoCard(video, coStars = null) {
  const thumbPath = video.thumb ? `../thumbnails/${video.thumb}` : '';
  const hasThumb = video.thumb && !video.thumb.includes('[VIDEO_ID]');
  
  // Build co-stars avatar HTML
  let avatarsHtml = '';
  if (coStars && coStars.length > 0) {
    for (const charKey of coStars) {
      const char = CHARACTERS[charKey];
      if (!char) continue;
      avatarsHtml += `
        <a href="./${charKey}.html" class="costar-avatar-link" title="${char.name}">
          <img src="${char.avatar}" alt="${char.name}" class="costar-avatar" 
               onerror="this.src='../images/default-avatar.jpg'"
               style="border-color: ${char.color}">
        </a>
      `;
    }
  }
  
  // Build card content - MUST be inside the <a> tag
  const cardContent = `
    <div class="card-content">
      <p class="card-oneliner">"${video.oneLiner}"</p>
      ${avatarsHtml ? `<div class="card-costars-avatars">${avatarsHtml}</div>` : ''}
    </div>
  `;
  
  // Build thumbnail section
  const thumbSection = `
    <div class="card-media">
      ${hasThumb 
        ? `<img src="${thumbPath}" alt="${video.oneLiner}" loading="lazy" 
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
        : ''
      }
      <div class="card-placeholder" style="${hasThumb ? 'display:none' : 'display:flex'}">
        <span>THUMB<br>SOON</span>
      </div>
      <span class="card-badge">↗ Sora</span>
    </div>
  `;
  
  // COMPLETE CARD - All content inside the anchor tag
  return `<a href="https://sora.chatgpt.com/p/${video.id}" target="_blank" rel="noopener" class="video-card">${thumbSection}${cardContent}</a>`;
}

function getMultiVideosForCharacter(charKey) {
  return VIDEO_DB.multi.filter(video => video.characters.includes(charKey));
}

function changeSoloPage(direction) {
  const charKey = getCharacterKey();
  const videos = VIDEO_DB.solo[charKey] || [];
  const totalPages = Math.ceil(videos.length / VIDEOS_PER_PAGE);
  
  currentSoloPage += direction;
  if (currentSoloPage < 1) currentSoloPage = 1;
  if (currentSoloPage > totalPages) currentSoloPage = totalPages;
  
  renderSoloVideos(videos, charKey);
  document.getElementById('solo-videos-grid').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function changeMultiPage(direction) {
  const charKey = getCharacterKey();
  const videos = getMultiVideosForCharacter(charKey);
  const totalPages = Math.ceil(videos.length / VIDEOS_PER_PAGE);
  
  currentMultiPage += direction;
  if (currentMultiPage < 1) currentMultiPage = 1;
  if (currentMultiPage > totalPages) currentMultiPage = totalPages;
  
  renderMultiVideos(videos, charKey);
  document.getElementById('multi-videos-grid').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCharacterPage);
} else {
  initCharacterPage();
}