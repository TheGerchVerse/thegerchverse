// CHARACTER-LOADER.JS - Renders character pages from videos.js
// This script powers all individual character pages
// ============================================

// Configuration
const VIDEOS_PER_PAGE = 12;

// Page state
let currentSoloPage = 1;
let currentMultiPage = 1;

// Get character key from URL or data attribute
function getCharacterKey() {
  // Try to get from data attribute on body
  const bodyKey = document.body.dataset.character;
  if (bodyKey) return bodyKey;
  
  // Fallback: extract from URL path
  const path = window.location.pathname;
  const match = path.match(/\/characters\/(\w+)\.html/);
  return match ? match[1] : null;
}

// ============================================
// INITIALIZE CHARACTER PAGE
// ============================================
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
  
  // Render header
  renderHeader(character);
  
  // Render solo videos
  renderSoloVideos(soloVideos, charKey);
  
  // Render multi videos
  renderMultiVideos(multiVideos, charKey);
  
  // Update page title
  document.title = `${character.name} | Gerch-Verse`;
}

// ============================================
// RENDER HEADER
// ============================================
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
  
  // Apply character color theme
  document.documentElement.style.setProperty('--char-color', character.color);
}

// ============================================
// RENDER SOLO VIDEOS
// ============================================
function renderSoloVideos(videos, charKey) {
  const gridEl = document.getElementById('solo-videos-grid');
  const paginationEl = document.getElementById('solo-pagination');
  const countEl = document.getElementById('solo-count');
  
  if (!gridEl) return;
  
  // Update count
  if (countEl) countEl.textContent = videos.length;
  
  if (videos.length === 0) {
    gridEl.innerHTML = '<div class="empty-message">No solo videos yet. Check back soon!</div>';
    if (paginationEl) paginationEl.style.display = 'none';
    return;
  }
  
  // Calculate pagination
  const totalPages = Math.ceil(videos.length / VIDEOS_PER_PAGE);
  const startIdx = (currentSoloPage - 1) * VIDEOS_PER_PAGE;
  const endIdx = startIdx + VIDEOS_PER_PAGE;
  const visibleVideos = videos.slice(startIdx, endIdx);
  
  // Render cards
  gridEl.innerHTML = visibleVideos.map(video => renderVideoCard(video)).join('');
  
  // Render pagination
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

// ============================================
// RENDER MULTI VIDEOS
// ============================================
function renderMultiVideos(videos, charKey) {
  const sectionEl = document.getElementById('multi-videos-section');
  const gridEl = document.getElementById('multi-videos-grid');
  const paginationEl = document.getElementById('multi-pagination');
  const countEl = document.getElementById('multi-count');
  
  if (!sectionEl || !gridEl) return;
  
  // Update count
  if (countEl) countEl.textContent = videos.length;
  
  if (videos.length === 0) {
    sectionEl.style.display = 'none';
    return;
  }
  
  sectionEl.style.display = 'block';
  
  // Calculate pagination
  const totalPages = Math.ceil(videos.length / VIDEOS_PER_PAGE);
  const startIdx = (currentMultiPage - 1) * VIDEOS_PER_PAGE;
  const endIdx = startIdx + VIDEOS_PER_PAGE;
  const visibleVideos = videos.slice(startIdx, endIdx);
  
  // Render cards with co-star avatars
  gridEl.innerHTML = visibleVideos.map(video => {
    const coStars = video.characters.filter(c => c !== charKey);
    return renderVideoCard(video, coStars);
  }).join('');
  
  // Render pagination
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
// RENDER VIDEO CARD
// ============================================
function renderVideoCard(video, coStars = null) {
  const thumbPath = video.thumb ? `../thumbnails/${video.thumb}` : '';
  const hasThumb = video.thumb && !video.thumb.includes('[VIDEO_ID]');
  
  // Build co-stars avatar HTML
  let avatarsHtml = '';
  if (coStars && coStars.length > 0) {
    avatarsHtml = coStars.map(charKey => {
      const char = CHARACTERS[charKey];
      if (!char) return '';
      return `
        <a href="./${charKey}.html" class="costar-avatar-link" title="${char.name}">
          <img src="${char.avatar}" alt="${char.name}" class="costar-avatar" 
               onerror="this.src='../images/default-avatar.jpg'"
               style="border-color: ${char.color}">
        </a>
      `;
    }).join('');
  }
  
  // DOM ORDER: one-liner FIRST, then avatars
  // CSS will force visual order: one-liner on top, avatars below
  const cardContentHtml = `
    <div class="card-content">
      <p class="card-oneliner">"${video.oneLiner}"</p>
      <div class="card-costars-avatars">
        ${avatarsHtml}
      </div>
    </div>
  `;
  
  return `
    <a href="https://sora.chatgpt.com/p/${video.id}" target="_blank" rel="noopener" class="video-card">
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
      ${cardContentHtml}
    </a>
  `;
}

// ============================================
// GET MULTI VIDEOS FOR CHARACTER
// ============================================
function getMultiVideosForCharacter(charKey) {
  return VIDEO_DB.multi.filter(video => video.characters.includes(charKey));
}

// ============================================
// CHANGE SOLO PAGE
// ============================================
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

// ============================================
// CHANGE MULTI PAGE
// ============================================
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

// ============================================
// INITIALIZE ON DOM READY
// ============================================
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCharacterPage);
} else {
  initCharacterPage();
}