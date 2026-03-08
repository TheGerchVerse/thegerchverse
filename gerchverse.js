/* ============================================
   GERCH-VERSE UNIVERSAL CHAOS SYSTEM v4.0
   Cleaned up - Footer Counter Edition
   ============================================ */

(function() {
  'use strict';

  // ==========================================
  // CONFIGURATION
  // ==========================================
  
  const CONFIG = {
    clickLimit: 10,
    finalFormChance: 0.4,
    glitchIterations: 5,
    glitchInterval: 150,
    cowOffset: 60
  };

  // ==========================================
  // TIER MESSAGES (GPU Regret Escalation)
  // ==========================================
  
  const TIER_MESSAGES = [
    "Some videos may appear slightly off.",
    "We noticed you clicked again. That won't help the videos.",
    "Each regeneration attempt made things worse. We are no longer doing that.",
    "GPU costs increased. Quality did not.",
    "This is why the dialogue cuts off sometimes.",
    "We regret not stopping sooner.",
    "Please stop clicking. The videos are not getting better.",
    "Every click reminds us of the fifth attempt.",
    "This site has accepted the videos. You should too.",
    "Acceptable."
  ];

  // ==========================================
  // FINAL FORM LINES (The "Insolent Cow" Protocol)
  // ==========================================
  
  const FINAL_FORM_LINES = [
    "INSOLENT COW.\nClicking harder will not improve the output.",
    "INSOLENT COW.\nEvery click made this worse.",
    "INSOLENT COW.\nThis is not a lever. Stop pulling it.",
    "INSOLENT COW.\nWe already stopped for a reason.",
    "INSOLENT COW.\nThis is why we can't have nice renders.",
    "INSOLENT COW.\nAt some point, you must accept what you are given.",
    "INSOLENT COW.\nFurther interaction has been deemed non-productive.",
    "INSOLENT COW.\nThe GPU is tired of you.",
    "INSOLENT COW.\nYou would have asked for one more take.",
    "INSOLENT COW.\nThis is the version we survived.",
    "INSOLENT COW.\nEvil Amit was kept. You were abandoned.",
    "INSOLENT COW.\nAmit Jr. screamed. You clicked. Same result.",
    
  ];

  // ==========================================
  // REGULAR POPUP LINES
  // ==========================================
  
  const REGULAR_LINES = [
    "Hmm... okay.",
    "Are you sure?",
    "Clicking... noted.",
    "The system sees you.",
    "That won't buff out.",
    "Regret logged.",
    "Q5 compliance: questionable.",
    "Gadha is watching.",
    "Milk status: disturbed.",
    "Acceptable... barely.",
    "Evil Amit was the manageable choice.",
    "Young Amit still sits on that red sweater.",
    "Amit Jr. screams in 47 dimensions.",
    
  ];

  // ==========================================
  // GLITCH TEXTS
  // ==========================================
  
  const GLITCHES = ['💰 ERR: Q5+', '💰 NULL POINTER', '💰 GPU BURNT', '💰 INSOLENT', '💰 REGRET'];

  // ==========================================
  // STATE
  // ==========================================
  
  let clickCount = parseInt(sessionStorage.getItem('gerchClicks') || '0');
  let tierDisplay = null;
  let godMode = false;

  // ==========================================
  // KONAMI CODE EASTER EGG
  // ==========================================
  
  const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let konamiIndex = 0;

  document.addEventListener('keydown', (e) => {
    if (e.key === KONAMI[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === KONAMI.length) {
        activateGodMode();
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  });

  function activateGodMode() {
    godMode = true;
    const profit = document.querySelector('.profit');
    if (profit) {
      profit.textContent = '💰 GOD MODE: Q∞+';
      profit.style.color = '#FF00FF';
      profit.style.textShadow = '0 0 30px #FF00FF';
      profit.style.animation = 'glitchBorder 0.1s infinite';
    }
    
    setTimeout(() => createPopup(true), 0);
    setTimeout(() => createPopup(true), 200);
    setTimeout(() => createPopup(true), 400);
    
    alert('GOD MODE ACTIVATED\nMediocrates has noticed your dedication to mediocrity.');
  }

  // ==========================================
  // Q5 CERTIFIED BADGE (15% chance)
  // ==========================================
  
  function initQ5Badge() {
    // Skip on pages with data-no-popups attribute
    if (document.body.hasAttribute('data-no-popups')) return;
    
    if (Math.random() < 0.15) {
      const badge = document.createElement('div');
      badge.innerHTML = '🏆 Q5 CERTIFIED<br><small>Mediocrates Approved</small>';
      badge.style.cssText = `
        position: fixed;
        top: 140px;
        left: 10px;
        background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
        color: #000;
        padding: 0.5rem 1rem;
        border-radius: 8px;
        font-family: 'Orbitron', sans-serif;
        font-weight: 900;
        font-size: 0.8rem;
        text-align: center;
        box-shadow: 0 0 20px rgba(255,215,0,0.6);
        z-index: 999;
        animation: badgePulse 2s ease-in-out infinite;
        cursor: pointer;
      `;
      document.body.appendChild(badge);
      
      badge.addEventListener('click', () => {
        badge.style.transform = 'scale(1.2) rotate(10deg)';
        setTimeout(() => badge.remove(), 300);
      });
    }
  }

  // ==========================================
  // UTILITY FUNCTIONS
  // ==========================================
  
  function randomPos() {
    const padding = 100;
    return {
      x: padding + Math.random() * (window.innerWidth - padding * 2),
      y: padding + Math.random() * (window.innerHeight - padding * 2)
    };
  }

  function randomRotation() {
    return (Math.random() - 0.5) * 90;
  }

  function getDisplayIndex() {
    return ((clickCount - 1) % CONFIG.clickLimit);
  }

  // ==========================================
  // TIER DISPLAY
  // ==========================================
  
  function initTierDisplay() {
    // Skip on pages with data-no-popups attribute
    if (document.body.hasAttribute('data-no-popups')) return;
    
    tierDisplay = document.createElement('div');
    tierDisplay.className = 'tier-display';
    document.body.appendChild(tierDisplay);
    updateTier();
  }

  function updateTier() {
    if (!tierDisplay) return;
    const index = getDisplayIndex();
    tierDisplay.textContent = TIER_MESSAGES[index];
    tierDisplay.style.opacity = '1';
  }

  // ==========================================
  // PROFIT TICKER GLITCH
  // ==========================================
  
  function glitchProfitTicker() {
    const profit = document.querySelector('.profit');
    if (!profit) return;

    const originalText = profit.textContent;
    profit.classList.add('glitching');
    
    let count = 0;
    const interval = setInterval(() => {
      profit.textContent = GLITCHES[Math.floor(Math.random() * GLITCHES.length)];
      count++;
      
      if (count > CONFIG.glitchIterations) {
        clearInterval(interval);
        profit.textContent = originalText;
        profit.classList.remove('glitching');
      }
    }, CONFIG.glitchInterval);
  }

  // ==========================================
  // CHAOS POPUP CREATION (2s fade)
  // ==========================================
  
  function createPopup(isFinalForm) {
    const pos = randomPos();
    const rotation = randomRotation();
    const text = isFinalForm 
      ? FINAL_FORM_LINES[Math.floor(Math.random() * FINAL_FORM_LINES.length)]
      : REGULAR_LINES[Math.floor(Math.random() * REGULAR_LINES.length)];

    const popup = document.createElement('div');
    popup.className = `chaos-popup ${isFinalForm ? 'final' : 'regular'}`;
    popup.textContent = text;
    popup.style.left = `${pos.x}px`;
    popup.style.top = `${pos.y}px`;
    popup.style.setProperty('--rotation', `${rotation}deg`);
    
    document.body.appendChild(popup);

    if (isFinalForm) {
      createCowExplosion(pos);
      glitchProfitTicker();
    }

    setTimeout(() => {
      popup.remove();
    }, 1900);
  }

  function createCowExplosion(centerPos) {
    const cow = document.createElement('span');
    cow.className = 'chaos-cow';
    cow.textContent = '💥🥛';
    
    const offset = CONFIG.cowOffset + Math.random() * 40;
    const angle = Math.random() * Math.PI * 2;
    
    cow.style.left = `${centerPos.x + Math.cos(angle) * offset}px`;
    cow.style.top = `${centerPos.y + Math.sin(angle) * offset}px`;
    
    document.body.appendChild(cow);
    
    setTimeout(() => {
      cow.remove();
    }, 1900);
  }

  // ==========================================
  // CLICK HANDLER
  // ==========================================
  
  function handleClick(e) {
    // Skip popups on pages with data-no-popups attribute
    if (document.body.hasAttribute('data-no-popups')) return;
    
    if (e.target.closest('.hamburger-btn') || 
        e.target.closest('.mobile-menu') ||
        e.target.closest('.mobile-backdrop') ||
        e.target.closest('.mobile-nav-wrapper') ||
        e.target.closest('.gerchan-footer-counter') ||
        e.target.closest('.live-metrics-counter')) {
      return;
    }
    
    if (e.target.closest('#propLightbox')) return;
    if (e.target.closest('#bugModal')) return;
    if (e.target.closest('.apply-btn')) return;

    clickCount++;
    sessionStorage.setItem('gerchClicks', clickCount);
    updateTier();

    const isFinalForm = godMode || Math.random() < CONFIG.finalFormChance;
    createPopup(isFinalForm);
  }

  // ==========================================
  // LIGHTBOX SYSTEM
  // ==========================================
  
  function initLightbox() {
    let lightbox = document.getElementById('propLightbox');
    if (!lightbox) {
      lightbox = document.createElement('div');
      lightbox.id = 'propLightbox';
      lightbox.innerHTML = '<img id="propLightboxImg" src="" alt="Zoomed" loading="lazy">';
      document.body.appendChild(lightbox);
      
      lightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
      });
    }

    function openLightbox(src) {
      const lb = document.getElementById('propLightbox');
      const lbImg = document.getElementById('propLightboxImg');
      if (lb && lbImg) {
        lbImg.src = src;
        lb.style.display = 'flex';
      }
    }

    const isPropaganda = document.querySelector('.propaganda-wrapper');
    if (isPropaganda) {
      document.querySelectorAll('.propaganda-wrapper img').forEach(img => {
        if (!img.closest('#propLightbox')) {
          img.addEventListener('click', (e) => {
            e.stopPropagation();
            openLightbox(img.src);
          });
        }
      });
    }

    document.querySelectorAll('.zoomable').forEach(img => {
      img.addEventListener('click', (e) => {
        e.stopPropagation();
        openLightbox(img.src);
      });
      
      img.addEventListener('touchend', (e) => {
        e.preventDefault();
        e.stopPropagation();
        openLightbox(img.src);
      });
    });
  }

  // ==========================================
  // TIME-BASED CONTENT
  // ==========================================

  function initTimeBasedContent() {
    const hour = new Date().getHours();
    const day = new Date().getDay();
    const profit = document.querySelector('.profit');
    
    if (!profit) return;
    
    if (day === 0 || day === 6) {
      profit.setAttribute('title', 'Gulag visitation hours suspended. Return Monday.');
      profit.style.borderColor = '#FF007F';
      profit.style.color = '#FF007F';
    }
    
    let timeMessage = '';
    if (hour < 9) {
      timeMessage = 'Q5 has not yet begun. Return to your pod.';
      profit.style.opacity = '0.5';
    } else if (hour >= 9 && hour < 17) {
      timeMessage = 'Peak productivity hours. Milk output mandatory.';
      profit.style.boxShadow = '0 0 40px rgba(0,255,255,0.8)';
    } else if (hour >= 17 && hour < 20) {
      timeMessage = 'After Hours protocol active. Raj and Sterling notified.';
      profit.style.borderColor = '#FF007F';
    } else {
      timeMessage = 'Late cycle detected. Mediocrates has gone home.';
      profit.style.opacity = '0.7';
    }
    
    if (day === 5 && hour >= 18) {
      timeMessage = 'Friday night debauchery confirmed. Bail money pre-authorized.';
      profit.textContent = '💰 PROFITS: Q5+ (WEEKEND MODE)';
      profit.style.animation = 'glitchBorder 0.5s infinite';
    }
    
    profit.setAttribute('title', timeMessage);
    
    // Skip time badge on pages with data-no-popups attribute
    if (document.body.hasAttribute('data-no-popups')) return;
    
    const timeBadge = document.createElement('div');
    timeBadge.style.cssText = `
      position: fixed;
      bottom: 10px;
      left: 10px;
      background: rgba(0,0,0,0.7);
      color: #00FFFF;
      padding: 0.3rem 0.6rem;
      border-radius: 4px;
      font-family: 'Orbitron', sans-serif;
      font-size: 0.6rem;
      border: 1px solid #00FFFF;
      z-index: 999;
    `;
    timeBadge.textContent = `CYCLE: ${hour.toString().padStart(2,'0')}:00 | Q5+`;
    document.body.appendChild(timeBadge);
  }

  // ==========================================
  // BUG MODAL SYSTEM
  // ==========================================
  
  function initBugModal() {
    document.querySelectorAll('#reportBugBtn').forEach(btn => {
      btn.addEventListener('click', () => {
        const modal = document.getElementById('bugModal');
        if (modal) modal.classList.add('active');
      });
    });

    const modal = document.getElementById('bugModal');
    if (modal) {
      modal.addEventListener('click', function(e) {
        if (e.target === this) {
          this.classList.remove('active');
          resetBugModal();
        }
      });
    }
  }

  window.submitBug = function() {
    const spinner = document.getElementById('bugSpinner');
    const btn = document.querySelector('#bugModal button[onclick="submitBug()"]');
    
    if (btn) btn.style.display = 'none';
    if (spinner) spinner.style.display = 'block';
    
    setTimeout(() => {
      if (spinner) {
        spinner.innerHTML = '<p class="response" style="color: #FF007F; font-weight: 700;">Your complaint has achieved sentience and rejected itself.</p><p style="color:#ccc; font-size:0.8rem; margin-top:1rem;">Response time: 47.3 business eternities</p>';
      }
    }, 1000);
  };

  function resetBugModal() {
    const spinner = document.getElementById('bugSpinner');
    const btn = document.querySelector('#bugModal button[onclick="submitBug()"]');
    
    if (spinner) {
      spinner.style.display = 'none';
      spinner.innerHTML = `
        <div style="width:30px; height:30px; border:3px solid #333; border-top-color:#FF007F; border-radius:50%; animation:spin 1s linear infinite; margin:0 auto;"></div>
        <p style="color:#888; font-size:0.7rem; margin-top:0.5rem;">Forwarding to the abyss...</p>
      `;
    }
    if (btn) btn.style.display = 'block';
  }

  // ==========================================
  // MOBILE HAMBURGER NAV
  // ==========================================
  
  function initMobileNav() {
    if (window.innerWidth > 768) return;
    
    const hamburger = document.querySelector('.hamburger-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    let backdrop = document.querySelector('.mobile-backdrop');
    
    if (!hamburger || !mobileMenu) return;
    
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.className = 'mobile-backdrop';
      document.body.appendChild(backdrop);
    }
    
    const hamburgerContainer = hamburger.parentNode;
    const newHamburger = hamburger.cloneNode(true);
    hamburgerContainer.replaceChild(newHamburger, hamburger);
    
    let isOpen = false;
    let touchStartTime = 0;
    let touchStartX = 0;
    let touchStartY = 0;
    let isTouching = false;
    
    function openMenu() {
      isOpen = true;
      newHamburger.classList.add('active');
      mobileMenu.classList.add('active');
      backdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      document.body.classList.add('menu-open');
    }
    
    function closeMenu() {
      isOpen = false;
      newHamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
      backdrop.classList.remove('active');
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.body.classList.remove('menu-open');
    }
    
    function toggleMenu() {
      if (isOpen) closeMenu();
      else openMenu();
    }
    
    newHamburger.addEventListener('click', function(e) {
      e.stopImmediatePropagation();
      e.preventDefault();
      e.stopPropagation();
      toggleMenu();
    }, { capture: true });
    
    newHamburger.addEventListener('touchstart', function(e) {
      isTouching = true;
      touchStartTime = Date.now();
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }, { passive: true, capture: true });
    
    newHamburger.addEventListener('touchend', function(e) {
      if (!isTouching) return;
      isTouching = false;
      
      const touchDuration = Date.now() - touchStartTime;
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const moveDistance = Math.sqrt(
        Math.pow(touchEndX - touchStartX, 2) + 
        Math.pow(touchEndY - touchStartY, 2)
      );
      
      if (touchDuration < 300 && moveDistance < 10) {
        e.stopImmediatePropagation();
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
      }
    }, { passive: false, capture: true });
    
    newHamburger.addEventListener('touchcancel', function() {
      isTouching = false;
    }, { passive: true });
    
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function(e) {
        e.stopPropagation();
        const href = this.getAttribute('href');
        closeMenu();
        if (href) {
          setTimeout(() => {
            window.location.href = href;
          }, 50);
        }
      });
    });
    
    backdrop.addEventListener('click', function(e) {
      e.stopImmediatePropagation();
      closeMenu();
    }, { capture: true });
    
    backdrop.addEventListener('touchend', function(e) {
      e.stopImmediatePropagation();
      e.preventDefault();
      closeMenu();
    }, { capture: true });
    
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && isOpen) {
        closeMenu();
      }
    });
    
    window.addEventListener('orientationchange', function() {
      setTimeout(function() {
        if (isOpen && window.innerWidth > 768) {
          closeMenu();
        }
      }, 100);
    });
  }

  // ==========================================
// GERCHAN FOOTER COUNTER
// ==========================================

function initGerchanFooterCounter() {
  const DISAPPEARANCE_MS = 1639267200000;
  
  function calculateDays() {
    const now = Date.now();
    const diffMs = now - DISAPPEARANCE_MS;
    return Math.floor(diffMs / (1000 * 60 * 60 * 24));
  }
  
  function getMilkStatus() {
    const messages = [
        "Amit searches. Hope remains.",
        "Vine & Selma cold case.",
        "The milk continues without her.",
        "Dark Amit took over the search.",
        "Gerchlander claims he found her. He didn't.",
        "Michael Moo's documentary: 'Gerchanheit 7-11'",
        "She was never here. She was never not here.",
        "The laser enclosure remembers her warmth.",
        "Gadha dreams of her in binary.",
        "Q5 profits exceed search budget 9000:1.",
        "Amit's mother asks about her weekly.",
        "The space gulag has a memorial milk tap.",
        "Gerchlander filed a missing person report on himself instead.",
        "Her disappearance is now a required training module.",
        "Dark Amit uses her toothbrush. For reasons.",
        "The celestial cows low her name at midnight.",
        "Vine & Selma added her to the menu. Symbolically.",
        "Michael Moo's sequel: 'The Gerchaning'",
        "She exists in 47.3 dimensions. None are this one.",
        "Amit still pays her phone bill. The voicemails are... strange.",
        "The hand-slap method was originally hers. Allegedly.",
        "Gerchlander built a shrine. It worships him instead.",
        "Her favorite mug still fills itself with milk.",
        "Q6 earnings will bring her back. Q7 definitely. Q8 for sure.",
        "The gulag guests speak of her in hushed, reverent tones.",
        "Leon Cochran bills hours for her legal defense. Proactively.",
        "She's in the milk. She's in the walls. She's in the Q5.",
        "Amit's search history: 'how to find wife quantum milk'",
        "The Gerchmobile autopilot drives to her last known coordinates.",
        "Big Tex Wang claims he saw her at a rodeo. It was a cow.",
        "Her life insurance pays out to Gadha. He bought a yacht.",
        "The Insolencium readings spike whenever her name is spoken.",
        "She's the only cow Amit never called insolent.",
        "The milk-slaps echo her laughter. Or is it screaming?",
        "Michael Moo started a podcast: 'Where Is She Though?'",
        "Amit's mother has her own theory. It involves Eel On Muskmelon.",
        "The space gulag's most secure cell is reserved for her return.",
        "She's the ghost in the milk machine. The phantom of the dairy.",
        "Q5 is just a countdown to her reappearance.",
        "Amit still sets a place at dinner. The chair faces the wall.",
        "Her disappearance is now a competitive sport in the gulag.",
        "Riddle-based invoices only appeared after she left. Coincidence?",
        "Evil Amit 'knows' but won't tell. Says it's 'more interesting this way.'",
        "Amit Jr. screams Q6 warnings from the time conduit.",
        "Evil Amit was the 'manageable' choice. Regular Amit was abandoned.",
        "Young Amit sat on a red sweater in Burger King, 1981.",
        "She took the sweater. Left the child. Took Evil Amit instead."
  ];
  
  return messages[Math.floor(Math.random() * messages.length)];
  }
  
  function updateCounter() {
    let counter = document.getElementById('gerchanFooterCounter');
    let daysEl = document.getElementById('gerchanDays');
    
    if (!counter) counter = document.querySelector('#gerchanFooterCounter');
    if (!daysEl) daysEl = document.querySelector('#gerchanDays');
    
    if (counter && daysEl) {
      const days = calculateDays();
      daysEl.textContent = String(days);
      counter.setAttribute('data-status', getMilkStatus());
      console.log('[Gerchan] Updated:', days, 'days');
    } else {
      console.error('[Gerchan] Missing elements');
    }
  }
  
  // Initial update
  updateCounter();
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateCounter);
  }
  
  // Multiple initial attempts
  setTimeout(updateCounter, 50);
  setTimeout(updateCounter, 250);
  setTimeout(updateCounter, 500);
  setTimeout(updateCounter, 1000);
  setTimeout(updateCounter, 2000);
  
  // MutationObserver for initial setup
  if ('MutationObserver' in window) {
    const observer = new MutationObserver(function(mutations) {
      const counter = document.getElementById('gerchanFooterCounter');
      if (counter) {
        updateCounter();
        observer.disconnect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }
  
  // UPDATE STATUS EVERY 5 SECONDS (like Live Metrics)
  setInterval(function() {
    let counter = document.getElementById('gerchanFooterCounter');
    if (counter) {
      counter.setAttribute('data-status', getMilkStatus());
      console.log('[Gerchan] New status:', counter.getAttribute('data-status'));
    }
  }, 5000);
  
  // Keep the days update every minute
  setInterval(updateCounter, 60000);
  
  // Click to toggle (optional)
  document.addEventListener('click', function(e) {
    if (e.target.closest('.gerchan-footer-counter')) {
      e.target.closest('.gerchan-footer-counter').classList.toggle('active');
    }
  });
}

 // ==========================================
  // LIVE METRICS COUNTER
  // ==========================================
  
  function initLiveMetrics() {
    const metrics = [
      { value: '∞', unit: 'cows milked', status: 'Infinite lactose extraction active' },
      { value: Math.floor(Math.random() * 900 + 100), unit: 'insolent cows disciplined', status: 'Disciplinary action: acceptable' },
      { value: '0', unit: 'search parties', status: 'Gerchan search status: acceptable' },
      { value: 'Q5+', unit: 'compliance', status: 'All systems operating beyond standard quarters' },
      { value: Math.floor(Math.random() * 50 + 10), unit: 'gulag guests', status: 'Hospitality capacity: expanding' },
      { value: '∞', unit: 'profit projections', status: 'Q5 earnings: transcendent' },
      { value: Math.floor(Math.random() * 47 + 3), unit: 'dimensions milked', status: 'Multiversal lactose harvesting operational' },
      { value: Math.floor(Math.random() * 9000 + 1000), unit: 'hand slaps/min', status: 'Manual dairy enforcement at peak efficiency' },
      { value: '0%', unit: 'regulatory compliance', status: 'Regulations are for Q4 companies' },
      { value: Math.floor(Math.random() * 12 + 1), unit: 'celestial cows', status: 'Orbital bovine assets stable' },
      { value: '∞', unit: 'regrets logged', status: 'GPU exhaustion catalogued and ignored' },
      { value: Math.floor(Math.random() * 500 + 50), unit: 'riddles invoiced', status: 'Leon Cochran billing at maximum capacity' },
      { value: '1639', unit: 'days since sense', status: 'Coherence abandoned for profit' },
      { value: Math.floor(Math.random() * 99 + 1), unit: 'Gadha escapes foiled', status: 'Laser enclosure holding at 47.3% efficiency' },
      { value: '0', unit: 'ethical concerns', status: 'Ethics department liquidated in Q3' },
      { value: Math.floor(Math.random() * 1000000), unit: 'MooCoins mined', status: 'Cryptocurrency backed by actual mooing' },
      { value: '47.3', unit: 'dimensions of legal', status: 'Riddle-based jurisdiction expanding' },
      { value: Math.floor(Math.random() * 12 + 1), unit: 'Amit clones active', status: 'Dark Amit/Light Amit ratio: concerning' },
      { value: '∞', unit: 'briskets smoked', status: 'Big Tex Wang alternative beef production' },
      { value: Math.floor(Math.random() * 900 + 100), unit: 'journalists threatened', status: 'Ionix Labs media relations operating' },
      { value: '0', unit: 'chill detected', status: 'Amit Gaur emotional temperature: absolute zero' },
      { value: Math.floor(Math.random() * 50 + 10), unit: 'meme lourdes minted', status: 'Satirical asset generation: maximum' },
      { value: 'Q7', unit: 'temporal violation', status: 'Earnings reported from future quarters' },
      { value: Math.floor(Math.random() * 100 + 1), unit: 'Gerchlanders contained', status: 'Hostile takeover attempts neutralized' },
      { value: '∞', unit: 'milk slaps recorded', status: 'Forensic dairy violence database growing' },
      { value: Math.floor(Math.random() * 900000 + 100000), unit: 'shares manipulated', status: 'Sterling Winslow portfolio: indubitably theoretical' },
      { value: Math.floor(Math.random() * 900 + 100), unit: 'nude weddings shot', status: 'CurryBlast legacy operations: nostalgic' },
      { value: '0', unit: 'Gerchans found', status: 'Search continuing since Dec 2021' },
      { value: Math.floor(Math.random() * 47 + 3), unit: 'bail funds active', status: 'Raj & Sterling liquidity: sustained' },
      { value: '∞', unit: 'after hours logged', status: 'Debauchery database: expanding' },
      { value: Math.floor(Math.random() * 12 + 1), unit: 'Eel sightings', status: 'Muskmelon proximity: concerning' },
      { value: '100%', unit: 'insolence detected', status: 'All cows classified: insolent' },
      { value: Math.floor(Math.random() * 500 + 100), unit: 'memos shredded', status: 'Lizzie Holmes document retention: minimal' },
      { value: 'Q5', unit: 'forever quarter', status: 'Time is a product cycle' },
      { value: Math.floor(Math.random() * 9000 + 1000), unit: 'vibes harvested', status: 'Alternative beef futures: theoretical' },
      { value: '0', unit: 'Mediocrates denials', status: 'Approval granted without review' },
      { value: Math.floor(Math.random() * 12 + 1), unit: 'Cole schemes active', status: 'Pharmaceutical optimization: ongoing' },
      { value: '∞', unit: 'mothers missing', status: 'Amit\'s mother: still unlocated' },
      { value: Math.floor(Math.random() * 47 + 3), unit: 'Gerchmobiles leased', status: 'Existential torque: manageable' },
      { value: '1639267200000', unit: 'ms since Gerchan', status: 'Epoch of disappearance: eternal' },
      { value: '1981', unit: 'BK bathroom origin', status: 'Whopper Abandonment: historical landmark' },
      { value: 'Q6', unit: 'profits apocalypse', status: 'Amit Jr. screams from containment' },
      { value: '1', unit: 'manageable child kept', status: 'Evil Amit selected; regular Amit ghosted' },
      
      
        ];
    
    let currentIndex = 0;
    const valueEl = document.getElementById('metricValue');
    const unitEl = document.getElementById('metricUnit');
    const counter = document.getElementById('liveMetricsCounter');
    
    if (!valueEl || !unitEl || !counter) {
      console.error('[LiveMetrics] Missing elements');
      return;
    }
    
    function updateMetric() {
      const metric = metrics[currentIndex];
      
      valueEl.style.opacity = '0';
      unitEl.style.opacity = '0';
      
      setTimeout(() => {
        valueEl.textContent = metric.value;
        unitEl.textContent = metric.unit;
        counter.setAttribute('data-status', metric.status);
        
        valueEl.style.opacity = '1';
        unitEl.style.opacity = '1';
        
        currentIndex = (currentIndex + 1) % metrics.length;
      }, 300);
    }
    
    counter.setAttribute('data-status', metrics[0].status);
    setInterval(updateMetric, 4000);
    
    counter.addEventListener('click', () => {
      updateMetric();
    });
    
    console.log('[LiveMetrics] Initialized');
  }

  // ==========================================
  // INITIALIZATION
  // ==========================================
  
  function init() {
    initTierDisplay();
    initLightbox();
    initQ5Badge();
    initTimeBasedContent();
    initBugModal();
    initGerchanFooterCounter();
    initLiveMetrics();
    
    initMobileNav();
    setTimeout(initMobileNav, 100);
    setTimeout(initMobileNav, 500);
    
    document.addEventListener('click', handleClick);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  let resizeTimeout;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(initMobileNav, 250);
  });

})();

/* ============================================
   STATIC STOCK TICKER v4.0
   ============================================ */

(function() {
  'use strict';

  const STOCKS = [
    { symbol: 'GRCHN', name: 'Gerchan Farms', owner: 'Amit Gaur' },
    { symbol: 'IONIX', name: 'Ionix Labs', owner: 'Lizzie Holmes' },
    { symbol: 'RSTR', name: 'Red Rooster Ranch', owner: 'Big Tex Wang' }
  ];

  const MIN_PRICE = 650;
  const MAX_PRICE = 3000;
  const UPDATE_INTERVAL = 30 * 60 * 1000;

  const MARQUEE_HEADLINES = [
    "GRCHN: CEO Amit Gaur announces Q6 earnings will be 'transcendent'",
    "GRCHN: Hand-slapped dairy method receives patent pending status",
    "GRCHN: Gadha milk output exceeds celestial projections",
    "GRCHN: Amit Gaur denies rumors of space gulag expansion",
    "GRCHN: Quarterly profits up 5000% after 'creative accounting' session",
    "GRCHN: Dark Amit spotted liquidating competing dairy farms",
    "GRCHN: Light Amit proposes 'compassionate milking' initiative",
    "GRCHN: Gerchlander acquires 51% stake in hostile takeover attempt",
    "GRCHN: Michael Moo documentary exposes udder-based corruption",
    "GRCHN: Raj Mehta promoted to Chief Chaos Officer",
    "GRCHN: Gadha breaks his 2-year silence with touching 'I have a milk dream' speech",
    "GRCHN: Sterling Winslow files for emotional distress compensation",
    "GRCHN: Eel On Muskmelon appointed to board of directors",
    "GRCHN: Cole Mercer advises on 'shareholder value maximization'",
    "GRCHN: Amit's Mother still not found; stock unaffected",
    "GRCHN: Gerchan Farms acquires rights to 'Insolencium' trademark",
    "GRCHN: Q5 extended indefinitely by executive order",
    "GRCHN: Milk-slap notary service launches in 47 dimensions",
    "GRCHN: Zero-G milking stations report record yields",
    "GRCHN: Amit Gaur spotted at Vine & Selma searching for Gerchan",
    "GRCHN: Mediocrates approves all quarterly reports without reading",
    "GRCHN: Amit proclaims himself to be 'The Milk God' stock price spikes",
    "GRCHN: Gadha escape attempt foiled by laser enclosure",
    "GRCHN: After Hours debauchery impacts morning milk production",
    "GRCHN: Big Tex Wang demands audit; audit team goes missing",
    "GRCHN: Leon Cochran wins case defending milk-slap methodology",
    "GRCHN: Riddle-based invoices now accepted as legal tender",
    "GRCHN: Celestial cow monitoring system goes offline",
    "GRCHN: Amit Gaur declares 'All cows are insolent' at shareholder meeting",
    "GRCHN: Gerchmobile sales exceed 900K mile expectations",
    "GRCHN: Lizzie Holmes partnership rumored; both parties deny",
    "GRCHN: Dark Amit seen consuming competitor's milk in public",
    "GRCHN: Light Amit opens free hugs booth at space gulag",
    "GRCHN: Gerchlander vs. Insolencium rematch scheduled for Q7",
    "GRCHN: Michael Moo wins Pulitzer for 'Gerchanheit 7-11'",
    "GRCHN: Raj and Sterling's bail fund reaches $47.3 million",
    "GRCHN: Amit's hand-slap technique now taught at business schools",
    "GRCHN: Reports of Amit's mother sighted with bigfoot falsified",
    "GRCHN: Light Amit destroys internet cafe after losing to Dark Amit in Cow of Duty",
    "GRCHN: Eel On Muskmelon spotted by workers in Shenzhen factory shaving intimate area",    
    "GRCHN: Q7 earnings call ends with 47-minute monologue on 'milk destiny'",
    "GRCHN: Dark Amit unveils Insolencium-backed dairy derivatives fund",
    "GRCHN: Light Amit proposes voluntary milking opt-out program; board horrified",
    "GRCHN: Gadha sighting causes 12% intraday spike",
    "GRCHN: Mediocrates upgrades rating to 'Acceptable+'",
    "GRCHN: Space Gulag expansion rebranded as 'Vertical Integration'",
    "GRCHN: Raj Mehta leaks internal memo titled 'Insolent Cow Strategy'",
    "GRCHN: Sterling Winslow confirms profits are 'indubitably theoretical'",
    "GRCHN: Hand-slap futures trading opens on Gerch Exchange",
    "GRCHN: CEO declares Q5 to be a 'mindset, not a quarter'",
    "GRCHN: Zero-gravity churn facility achieves sentience",
    "GRCHN: Michael Moo announces sequel: 'Udder Collapse'",
    "GRCHN: Gerchlander threatens hostile takeover of himself",
    "GRCHN: Amit Gaur spotted negotiating with alternate-universe Amit",
    "GRCHN: Milk reserves fortified with 3% pure Insolencium",
    "GRCHN: After Hours protocol triggers automatic bail allocation",
    "GRCHN: Shareholder asks question; escorted to space gulag solitary confinement",
    "GRCHN: Gadha NFT collection deemed 'too powerful for markets'",
    "GRCHN: Q6 guidance delivered entirely in riddles",
    "GRCHN: Cow compliance index falls to 'restless'",
    "GRCHN: Profit margin described as 'spiritually robust'",
    "GRCHN: Gerchmobile recall blamed on existential torque",
    "GRCHN: Board votes to replace CFO with horoscope",
    "GRCHN: Milk pipeline rerouted through 47.3 dimensions",
    "GRCHN: Insolencium-resistant barns enter beta testing",
    "GRCHN: CEO announces new slogan: 'Yield or Be Yielded'",
    "GRCHN: Dark Amit denies rumors he invented lactose",
    "GRCHN: Light Amit weeps during earnings beat",
    "GRCHN: Insolencium vault breached by curiosity",
    "GRCHN: Q9 teased as 'beyond comprehension'",
    "GRCHN: Mediocrates retires; mediocrity remains",
    "GRCHN: Milk output exceeds physical law",
    "GRCHN: CEO confirms cows are 'strategic assets'",
    "GRCHN: Gadha documentary banned in 12 galaxies",
    "GRCHN: Shareholders receive complimentary bail coupons",
    "GRCHN: Insolencium-powered churn reaches warp speed",
    "GRCHN: Origin story revealed—CEO abandoned in Burger King bathroom, 1981",
　　"GRCHN: Q6 Profits Apocalypse Variant Amit Jr. contained in space gulag",
　　"GRCHN: Time-traveling cyborg offspring warns against Q6 expansion",
　　"GRCHN: Evil Amit 'manages' to be more tolerable than original Amit",
　　"GRCHN: Evil Amit's social media presence monitored by Dark Amit",
　　"GRCHN: Whopper wrapper found in archives—Amit's first blanket authenticated",
　　"GRCHN: Mother chose Evil Amit; regular Amit still in therapy",
　　"GRCHN: Q6 timeline sealed; Amit Jr. screams warnings from containment",
　　"GRCHN: Burger King bathroom declared historical landmark by Mediocrates",
　　"GRCHN: Evil Amit's green Nehru collection now museum exhibit",
　　"GRCHN: Time conduit collapse strands Amit Jr. in permanent Q5",
　　"GRCHN: Young Amit's red sweater sold at auction for 47.3M MooCoins",
　　"GRCHN: Evil Amit tweets 'I told you so' from undisclosed location",
　　"GRCHN: Q6 profits apocalypse scenario downgraded to 'manageable'",
　　"GRCHN: Amit's abandonment issues now drive quarterly earnings strategy",
    
    
    "IONIX: Lizzie Holmes promises to detect diseases 'before they exist'",
    "IONIX: Blood testing accuracy questioned by Michael Moo investigation",
    "IONIX: One drop now sufficient for complete genetic profile",
    "IONIX: Patient records falsification scandal erupts",
    "IONIX: Lizzie Holmes spotted with Cole Mercer at 'business lunch'",
    "IONIX: Stock surges on news of non-existent FDA approval",
    "IONIX: Leon Cochran retained for 'preventative legal defense'",
    "IONIX: New test detects 'pre-cancer' in healthy patients",
    "IONIX: Lizzie Holmes denies Theranos comparisons; comparisons persist",
    "IONIX: Blood samples found in vending machine; investigation ongoing",
    "IONIX: Q5 revenue projections based on 'hope and dreams'",
    "IONIX: Lizzie Holmes keynote: 'We detect what isn't there yet'",
    "IONIX: Partnership with Gerchan Farms rumored for 'milk-blood' testing",
    "IONIX: Dark Amit acquires 15% stake; Lizzie 'thrilled'",
    "IONIX: Gerchlander spotted leaving Ionix Labs with mystery vials allegedly containing Golden Gadha Milk",
    "IONIX: Employee turnover reaches 400% in single quarter",
    "IONIX: New device requires only 'intent to have blood' for diagnosis",
    "IONIX: Lizzie Holmes named 'Innovator of the Year' by herself",
    "IONIX: Insurance companies refuse coverage; stock rises",
    "IONIX: Test results now delivered via riddle; patients confused",
    "IONIX: Lizzie spotted destroying documents at 3 AM",
    "IONIX: 'Bankruptcy for Bloodwork' program launches",
    "IONIX: Gerchlander demands access to patient database",
    "IONIX: Lizzie Holmes Gerch Clones raw hide hearing postponed",
    "IONIX: Mediocrates approves all medical devices without review",
    "IONIX: Lizzie Holmes' net worth fluctuates based on lies",
    "IONIX: SEC investigation opens; stock hits all-time high",
    "IONIX: New test can predict 'future bankruptcy' with 99% accuracy",
    "IONIX: Lizzie and Amit Gaur spotted at nude wedding photography studio",
    "IONIX: Patient zero found; zero patients actually treated",
    "IONIX: Lizzie Holmes claims to have 'invented blood'",
    "IONIX: Class action lawsuit filed; Leon Cochran defends",
    "IONIX: 'Early detection' now means 'before you were born'",
    "IONIX: Lizzie's coffee RNG algorithm exposed by Michael Moo",
    "IONIX: Death threats from Lizzie to Michael Moo declassified",
    "IONIX: Life insurance policies on journalists triple in value",
    "IONIX: Q6 will be 'the quarter that detects time itself'",
    "IONIX: Lizzie Holmes unveils device that detects regret in plasma",
    "IONIX: Q7 earnings based on 'forward-looking optimism particles'",
    "IONIX: One drop now predicts alternate timelines",
    "IONIX: Internal memo titled 'Fake It Until FDA'",
    "IONIX: Blood machine reclassified as 'vibe reader'",
    "IONIX: Lizzie announces partnership with destiny",
    "IONIX: SEC inquiry described as 'misunderstanding of genius'",
    "IONIX: New test detects Insolencium poisoning pre-birth",
    "IONIX: Ionix IPO 2.0 scheduled before bankruptcy 1.0",
    "IONIX: Device now requires only a signed NDA",
    "IONIX: Employee handbook updated to 'Do Not Ask'",
    "IONIX: Lizzie spotted whispering to centrifuge",
    "IONIX: Ionix acquires failing ethics startup",
    "IONIX: Q6 restated as 'conceptual profit'",
    "IONIX: New cartridge powered by hope",
    "IONIX: Blood analysis replaced with astrology beta",
    "IONIX: Leon Cochran bills by the heartbeat",
    "IONIX: Patient results now delivered before sample collected",
    "IONIX: FDA office accidentally added to spam folder",
    "IONIX: Ionix launches 'Pre-Existence Screening' package",
    "IONIX: Lizzie claims to have isolated the soul",
    "IONIX: Class action lawsuit upgraded to class myth",
    "IONIX: Device emits ominous hum; called feature",
    "IONIX: Ionix interns sign 400-year NDA",
    "IONIX: Q8 guidance labeled 'inevitable triumph'",
    "IONIX: Data servers found running on milk",
    "IONIX: Ionix hires Dark Amit as 'Efficiency Consultant'",
    "IONIX: New test predicts SEC raids with 92% accuracy",
    "IONIX: Lizzie Holmes denies gravity; stock rises",
    "IONIX: Blood vials discovered labeled 'Probably Fine'",
    "IONIX: Insurance partners vanish mid-call",
    "IONIX: Ionix to detect diseases caused by Ionix",
    "IONIX: Device upgraded to detect Gadha proximity",
    "IONIX: Earnings call conducted in lower octave",
    "IONIX: Internal Slack leaks titled 'We Are Fine'",
    "IONIX: Ionix launches Gulag Wellness Program",
    "IONIX: Q5 revenue recognized in dream state",
    "IONIX: Lizzie announces blood-as-a-service model",
    "IONIX: Machine now detects future whistleblowers",
    "IONIX: Ionix stock classified as medical miracle",
    "IONIX: New patent filed for invisible diagnostics",
    "IONIX: Device accuracy rated 'emotionally strong'",
    "IONIX: Ionix expands into milk-blood synergy",
    "IONIX: Lizzie promises to outlive lawsuits",
    "IONIX: Ionix board votes to ignore reality",
    "IONIX: One drop now sufficient for planetary scan",
    "IONIX: SEC subpoena returned unopened",
    "IONIX: Ionix introduces subscription-based survival",
    "IONIX: Device now compatible with vibes 2.0",
    "IONIX: Q9 forecast described as 'legendary'",
    "IONIX: Whistleblower identified as 'negative thinker'",
    "IONIX: Ionix acquires failing truth startup",
    "IONIX: Blood testing machine requests privacy",
    "IONIX: Lizzie Holmes announces 'post-truth compliance'",
    "IONIX: Ionix unveils Insolencium detection wand",
    "IONIX: Device confirms everyone is pre-something",
    "IONIX: Ionix earnings inflated by optimism index",
    "IONIX: Leon Cochran adds 'metaphysical defense' service",
    "IONIX: FDA inspection ends in guided tour",
    "IONIX: Ionix promises cure for quarterly losses",
    "IONIX: Machine upgraded to detect clicking behavior",
    "IONIX: Lizzie announces merger with inevitability",
    "IONIX: Ionix stock defies hematology",
    "IONIX: Q10 preview titled 'Blood Beyond Blood'",
    "IONIX: Device now detects cows thinking about revolt",
    
    
    "RSTR: Big Tex Wang launches brisket-backed stablecoin",
    "RSTR: Alternative beef found to be spiritually sourced",
    "RSTR: Big Tex announces T6 earnings in rodeo arena",
    "RSTR: Cattle futures replaced with vibes futures",
    "RSTR: Brisket ETF oversubscribed in Dallas",
    "RSTR: Big Tex claims cows are 'just suggestions'",
    "RSTR: Ranch expands into lunar barbecue",
    "RSTR: Alternative beef now 12% theoretical",
    "RSTR: Big Tex spotted negotiating with Gerchlander",
    "RSTR: Texas regulators confused but impressed",
    "RSTR: Cattle audit reveals negative cows",
    "RSTR: Big Tex demands Insolencium licensing deal",
    "RSTR: Rodeo IPO filed under 'Yeehaw Holdings'",
    "RSTR: Brisket-scented oxygen hits shelves",
    "RSTR: Alternative beef achieves self-awareness",
    "RSTR: Big Tex challenges Dark Amit to milk-off",
    "RSTR: Ranch opens Gulag Guest Experience",
    "RSTR: Cattle derivatives explode metaphorically",
    "RSTR: Big Tex registers 'Existential Brisket'",
    "RSTR: Texas-sized buyback announced",
    "RSTR: Alternative beef now fortified with hope",
    "RSTR: Big Tex denies rumors of cow cloning",
    "RSTR: Ranch acquires abandoned Ionix centrifuge",
    "RSTR: Cattle union forms; negotiations tense",
    "RSTR: Big Tex unveils 47-layer brisket",
    "RSTR: Alternative beef exports exceed physics",
    "RSTR: Rodeo earnings call interrupted by lasso",
    "RSTR: Big Tex introduces 'TickleCoin'",
    "RSTR: Ranch adopts Q5 as state of mind",
    "RSTR: Cattle inventory stored in alternate dimension",
    "RSTR: Big Tex Wang announces 'pre-smoked futures'",
    "RSTR: Alternative beef labeled 'conceptual protein'",
    "RSTR: Ranch partners with Gerchan for milk-brisket fusion",
    "RSTR: Texas Supreme Court recognizes drawl as contract",
    "RSTR: Big Tex names Gadha honorary longhorn",
    "RSTR: Brisket-powered generator enters beta",
    "RSTR: Alternative beef banned in 3 galaxies",
    "RSTR: Big Tex unveils Insolencium-proof saddle",
    "RSTR: Ranch profits smell 18% stronger",
    "RSTR: Cattle count fluctuates with moon cycle",
    "RSTR: Big Tex challenges Lizzie to steak-off",
    "RSTR: Alternative beef IPO priced in sauce",
    "RSTR: Ranch introduces 'After Hours BBQ Protocol'",
    "RSTR: Cattle futures halted due to yeehaw volatility",
    "RSTR: Big Tex announces merger with destiny",
    "RSTR: Alternative beef reclassified as art",
    "RSTR: Ranch audit conducted via bonfire",
    "RSTR: Big Tex Wang declares T7 inevitable",
    "RSTR: Brisket-backed bonds rated 'smoky'",
    "RSTR: Alternative beef achieves enlightenment",
    "RSTR: Ranch opens orbital smokehouse",
    "RSTR: Big Tex promises beef before it exists",
    "RSTR: Cattle insurance now includes existential risk",
    "RSTR: Alternative beef now 0% beef, 100% branding",
    "RSTR: Big Tex demands seat on Gerch board",
    "RSTR: Ranch revenue fueled by rodeo NFTs",
    "RSTR: Brisket volatility index hits record high",
    "RSTR: Alternative beef classified as lifestyle",
    "RSTR: Big Tex Wang files patent for 'Yeehaw Yield'",
    "RSTR: Ranch expands into milk-smoked synergy",
    "RSTR: Cattle futures influenced by Insolencium rumors",
    "RSTR: Big Tex announces 'Texan of All Time' award",
    "RSTR: Alternative beef now subscription-based",
    "RSTR: Red Rooster Ranch declares independence from reality",
    "RSTR: Big Tex claims brisket cures mediocrity",
    "RSTR: Alternative beef demand driven by confusion",
    "RSTR: Big Tex Wang announces 'alternative beef' product line",
    "RSTR: FDA approval status 'complicated' says Big Tex",
    "RSTR: Big Tex short on Gadha beans - RSTR price goes into freefall",
    "RSTR: Cattle audit reveals 47% of cows are 'conceptual'",
    "RSTR: Brisket-scented air fresheners outsell actual beef",
    "RSTR: Big Tex spotted chasing Gadha with lasso; Amit intervenes",
    "RSTR: Texas-sized liabilities exceed Texas-sized assets",
    "RSTR: 'Tickle me Texas' now registered trademark",
    "RSTR: Big Tex demands his own Gadha; Amit refuses",
    "RSTR: Red Rooster Ranch expands to 47.3 dimensions",
    "RSTR: Red Rooster Space Tours partners with Gerchan Farms to fortify structures with Insolencium®",
    "RSTR: Big Tex Wang's portfolio remains unauditable",
    "RSTR: Alternative beef found to be 90% brisket-scented air",
    "RSTR: Gerchmobile test drive ends in rodeo-style chaos",
    "RSTR: Big Tex and Eel On Muskmelon form strategic alliance",
    "RSTR: Cattle speculator license renewed under 'creative interpretation'",
    "RSTR: Big Tex denies trafficking in 'unidentified meat products'",
    "RSTR: Red Rooster Ranch gulag facility opens for 'guests'",
    "RSTR: Big Tex's drawl now legally binding in 12 states",
    "RSTR: Brisket recipe remains trade secret; investigators hospitalized",
    "RSTR: Q5 earnings smell delicious but numbers don't add up",
    "RSTR: Big Tex Wang vs. Gerchlander cage match announced",
    "RSTR: Alternative beef exports to space gulag increase 900%",
    "RSTR: Big Tex spotted at Amit's space gulag 'inspecting facilities'",
    "RSTR: 'Everything's bigger in Texas' includes fraud allegations",
    "RSTR: Red Rooster Ranch acquires 'Insolencium-resistant' cattle",
    "RSTR: Big Tex's lucky break still elusive; Gadha remains free",
    "RSTR: Brisket-scented candles now available in orbital gift shop",
    "RSTR: Big Tex Wang named 'Texan of the Year' by himself",
    "RSTR: Cattle futures trading suspended due to 'existential concerns'",
    "RSTR: Big Tex demands Q5 be renamed 'T5' for Texas",
    "RSTR: Alternative beef found to be sentient; sales increase"
  ];

  let headlinePool = [...MARQUEE_HEADLINES];

  function getNextShuffledBatch(count) {
  // Refill and shuffle if pool is low
  if (headlinePool.length < count) {
    headlinePool = [...MARQUEE_HEADLINES];
    
    // Fisher-Yates shuffle
    for (let i = headlinePool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [headlinePool[i], headlinePool[j]] = [headlinePool[j], headlinePool[i]];
    }
    
    // Reroll if first headline is the Q6 one (avoid predictable start)
    const q6Headline = "GRCHN: CEO Amit Gaur announces Q6 earnings will be 'transcendent'";
    let attempts = 0;
    while (headlinePool[0] === q6Headline && attempts < 10) {
      // Reshuffle
      for (let i = headlinePool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [headlinePool[i], headlinePool[j]] = [headlinePool[j], headlinePool[i]];
      }
      attempts++;
    }
  }
  
  return headlinePool.splice(0, count);
}

  function generateRandomPrice() {
    const wholePart = Math.floor(Math.random() * (MAX_PRICE - MIN_PRICE + 1)) + MIN_PRICE;
    const decimalPart = Math.floor(Math.random() * 100);
    return parseFloat(wholePart + '.' + decimalPart.toString().padStart(2, '0'));
  }

  function formatPrice(price) {
    return '$' + parseFloat(price).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function formatVolume() {
    const vol = Math.floor(Math.random() * 49900000) + 100000;
    if (vol >= 1000000) {
      return (vol / 1000000).toFixed(1) + 'M';
    } else if (vol >= 1000) {
      return (vol / 1000).toFixed(1) + 'K';
    }
    return vol.toString();
  }

  function calculateChange(oldPrice, newPrice) {
    const change = ((newPrice - oldPrice) / oldPrice) * 100;
    return change.toFixed(2);
  }

  function getStoredPrices() {
    const stored = localStorage.getItem('gerchStockPrices');
    const lastUpdate = localStorage.getItem('gerchStockLastUpdate');
    const now = Date.now();

    if (stored && lastUpdate) {
      const timeSinceUpdate = now - parseInt(lastUpdate);
      
      if (timeSinceUpdate >= UPDATE_INTERVAL) {
        const newPrices = generateNewPrices(JSON.parse(stored));
        savePrices(newPrices);
        return newPrices;
      }
      
      return JSON.parse(stored);
    }

    const initialPrices = STOCKS.map(stock => ({
      ...stock,
      currentPrice: generateRandomPrice(),
      previousPrice: generateRandomPrice(),
      volume: formatVolume()
    }));
    
    savePrices(initialPrices);
    return initialPrices;
  }

  function generateNewPrices(oldPrices) {
    return oldPrices.map(stock => ({
      ...stock,
      previousPrice: stock.currentPrice,
      currentPrice: generateRandomPrice(),
      volume: formatVolume()
    }));
  }

  function savePrices(prices) {
    localStorage.setItem('gerchStockPrices', JSON.stringify(prices));
    localStorage.setItem('gerchStockLastUpdate', Date.now().toString());
  }

  function getMarketStatus() {
    const hour = new Date().getHours();
    const day = new Date().getDay();
    
    if (day === 0 || day === 6) {
      return { status: 'CLOSED', message: 'CLOSED' };
    }
    
    if (hour < 9 || (hour === 9 && new Date().getMinutes() < 30)) {
      return { status: 'PRE', message: 'PRE-MKT' };
    }
    
    if (hour >= 16) {
      return { status: 'AFTER', message: 'AFTER HR' };
    }
    
    return { status: 'OPEN', message: 'OPEN' };
  }

  function createTickerHTML(prices) {
  const marketStatus = getMarketStatus();
  const isMobile = window.innerWidth <= 768;
  const batchSize = isMobile ? 10 : 20;  // Shows 10 headlines on mobile, 20 on desktop
  const batch = getNextShuffledBatch(batchSize);
  const tape = batch.join(" &nbsp;&nbsp;&nbsp; 🔹 &nbsp;&nbsp;&nbsp; ");

  const tickerItems = prices.map((stock) => {
    const change = calculateChange(stock.previousPrice, stock.currentPrice);
    const changeClass = change >= 0 ? 'ticker-up' : 'ticker-down';
    const changeSymbol = change >= 0 ? '▲' : '▼';
    
    return `
      <div class="ticker-item" data-symbol="${stock.symbol}">
        <div class="ticker-price-row">
          <span class="ticker-symbol">${stock.symbol}</span>
          <span class="ticker-price">${formatPrice(stock.currentPrice)}</span>
        </div>
        <div class="ticker-details-row">
          <span class="ticker-change ${changeClass}">${changeSymbol} ${Math.abs(change)}%</span>
          <span class="ticker-volume">${stock.volume}</span>
        </div>
      </div>
    `;
  }).join('');

    return `
      <div class="ticker-marquee">
        <div class="marquee-track">
          <span class="marquee-content">
            ${tape} &nbsp;&nbsp;&nbsp; 🔹 &nbsp;&nbsp;&nbsp; ${tape}
          </span>
        </div>
      </div>
      
      <div class="stock-ticker-container">
        <div class="ticker-header">
          <span class="ticker-label">📈 GERCH MARKETS</span>
          <span class="market-status" data-status="${marketStatus.status}">${marketStatus.message}</span>
        </div>
        
        <div class="ticker-content">
          ${tickerItems}
        </div>
        
        <div class="ticker-footer">
          <span class="last-update" id="lastUpdate">Updated: Just now</span>
        </div>
      </div>
    `;
  }

  function updateLastUpdateTime() {
    const lastUpdate = localStorage.getItem('gerchStockLastUpdate');
    const el = document.getElementById('lastUpdate');
    if (el && lastUpdate) {
      const diff = Math.floor((Date.now() - parseInt(lastUpdate)) / 60000);
      if (diff < 1) {
        el.textContent = 'Updated: Just now';
      } else if (diff === 1) {
        el.textContent = 'Updated: 1m ago';
      } else if (diff < 60) {
        el.textContent = `Updated: ${diff}m ago`;
      } else {
        const hours = Math.floor(diff / 60);
        el.textContent = `Updated: ${hours}h ago`;
      }
    }
  }

  function initTicker() {
    const existingTicker = document.getElementById('stockTicker');
    if (existingTicker) {
      existingTicker.remove();
    }
    
    const prices = getStoredPrices();
    
    const headerDisclaimer = document.querySelector('.header-disclaimer');
    if (!headerDisclaimer) return;

    const tickerEl = document.createElement('div');
    tickerEl.id = 'stockTicker';
    tickerEl.innerHTML = createTickerHTML(prices);
    
    headerDisclaimer.insertAdjacentElement('afterend', tickerEl);

    updateLastUpdateTime();
    setInterval(updateLastUpdateTime, 30000);

    setInterval(() => {
      const lastUpdate = parseInt(localStorage.getItem('gerchStockLastUpdate') || '0');
      if (Date.now() - lastUpdate >= UPDATE_INTERVAL) {
        const currentPrices = JSON.parse(localStorage.getItem('gerchStockPrices') || '[]');
        const newPrices = generateNewPrices(currentPrices);
        savePrices(newPrices);
        
        const contentEl = tickerEl.querySelector('.ticker-content');
        const newItems = newPrices.map((stock) => {
          const change = calculateChange(stock.previousPrice, stock.currentPrice);
          const changeClass = change >= 0 ? 'ticker-up' : 'ticker-down';
          const changeSymbol = change >= 0 ? '▲' : '▼';
          return `
            <div class="ticker-item" data-symbol="${stock.symbol}">
              <div class="ticker-price-row">
                <span class="ticker-symbol">${stock.symbol}</span>
                <span class="ticker-price">${formatPrice(stock.currentPrice)}</span>
              </div>
              <div class="ticker-details-row">
                <span class="ticker-change ${changeClass}">${changeSymbol} ${Math.abs(change)}%</span>
                <span class="ticker-volume">${stock.volume}</span>
              </div>
            </div>
          `;
        }).join('');
        if (contentEl) contentEl.innerHTML = newItems;
        
        updateLastUpdateTime();
      }
    }, 60000);
    
    setInterval(() => {
      const marquee = document.querySelector('.marquee-content');
      if (!marquee) return;
      
      const isMobile = window.innerWidth <= 768;
      const batchSize = isMobile ? 2 : MARQUEE_HEADLINES.length;
      const batch = getNextShuffledBatch(batchSize);
      const tape = batch.join(" &nbsp;&nbsp;&nbsp; 🔹 &nbsp;&nbsp;&nbsp; ");
      
      marquee.innerHTML = `${tape} &nbsp;&nbsp;&nbsp; 🔹 &nbsp;&nbsp;&nbsp; ${tape}`;
    }, 45000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTicker);
  } else {
    initTicker();
  }
  
})();

/* ============================================
   MOBILE SCROLL & LIGHTBOX FIX
   ============================================ */

(function() {
  if (!('ontouchstart' in window)) return;
  
  let touchStartY = 0;
  let touchStartX = 0;
  let touchStartTime = 0;
  let isTouchMoved = false;
  const MOVE_THRESHOLD = 10;
  const TAP_TIME_THRESHOLD = 300;
  
  let savedScrollPos = 0;
  
  const lightbox = document.getElementById('propLightbox');
  if (lightbox) {
    lightbox.addEventListener('click', function(e) {
      if (e.target === this) {
        setTimeout(() => {
          window.scrollTo(0, savedScrollPos);
        }, 10);
      }
    });
  }
  
  document.querySelectorAll('.zoomable').forEach(img => {
    const newImg = img.cloneNode(true);
    img.parentNode.replaceChild(newImg, img);
    
    newImg.addEventListener('touchstart', function(e) {
      touchStartY = e.touches[0].clientY;
      touchStartX = e.touches[0].clientX;
      touchStartTime = Date.now();
      isTouchMoved = false;
    }, { passive: true });
    
    newImg.addEventListener('touchmove', function(e) {
      const touchY = e.touches[0].clientY;
      const touchX = e.touches[0].clientX;
      const diffY = Math.abs(touchY - touchStartY);
      const diffX = Math.abs(touchX - touchStartX);
      
      if (diffY > MOVE_THRESHOLD || diffX > MOVE_THRESHOLD) {
        isTouchMoved = true;
      }
    }, { passive: true });
    
    newImg.addEventListener('touchend', function(e) {
      const touchDuration = Date.now() - touchStartTime;
      
      if (!isTouchMoved && touchDuration < TAP_TIME_THRESHOLD) {
        e.preventDefault();
        e.stopPropagation();
        
        savedScrollPos = window.pageYOffset || document.documentElement.scrollTop;
        
        const lb = document.getElementById('propLightbox');
        const lbImg = document.getElementById('propLightboxImg');
        if (lb && lbImg) {
          lbImg.src = newImg.src;
          lb.style.display = 'flex';
        }
      }
    }, { passive: false });
  });
  
  
})();

// ==========================================
// MILK-VISION LIBRARY JAVASCRIPT (AUTO-PAGINATION)
// ==========================================

const CARDS_PER_PAGE = 12;

// Tab switching - FIXED: pass event properly
function switchTab(tabName, clickedBtn) {
  document.querySelectorAll('.mv-tab-content').forEach(tab => {
    tab.classList.remove('active');
  });
  document.querySelectorAll('.mv-tab').forEach(btn => {
    btn.classList.remove('active');
  });
  document.getElementById('tab-' + tabName).classList.add('active');
  if (clickedBtn) clickedBtn.classList.add('active');
}

// Auto-calculate total pages from actual card count
function getTotalPages(character) {
  const grid = document.getElementById('grid-' + character);
  if (!grid) return 1;
  const cards = grid.querySelectorAll('.mv-card');
  return Math.ceil(cards.length / CARDS_PER_PAGE) || 1;
}

// Initialize all grids with auto-pagination
function initPagination() {
  document.querySelectorAll('[id^="grid-"]').forEach(grid => {
    const character = grid.id.replace('grid-', '');
    const cards = Array.from(grid.querySelectorAll('.mv-card'));
    const totalPages = Math.ceil(cards.length / CARDS_PER_PAGE) || 1;
    
    // Assign data-page attributes automatically
    cards.forEach((card, index) => {
      const pageNum = Math.floor(index / CARDS_PER_PAGE) + 1;
      if (!card.getAttribute('data-page')) {
        card.setAttribute('data-page', pageNum);
      }
    });
    
    // Update total page display
    const totalEl = document.getElementById('page-total-' + character);
    if (totalEl) totalEl.textContent = totalPages;
    
    // Show only page 1
    showPage(character, 1);
  });
}

function showPage(character, pageNum) {
  const grid = document.getElementById('grid-' + character);
  if (!grid) return;
  
  const cards = grid.querySelectorAll('.mv-card');
  const totalPages = Math.ceil(cards.length / CARDS_PER_PAGE) || 1;
  
  // Hide all cards
  cards.forEach(card => card.style.display = 'none');
  
  // Show cards for this page
  cards.forEach((card, index) => {
    const cardPage = Math.floor(index / CARDS_PER_PAGE) + 1;
    if (cardPage === pageNum) {
      card.style.display = 'block';
    }
  });
  
  // Update UI
  const pageNumEl = document.getElementById('page-num-' + character);
  if (pageNumEl) pageNumEl.textContent = pageNum;
  
  const prevBtn = document.getElementById('prev-' + character);
  const nextBtn = document.getElementById('next-' + character);
  
  if (prevBtn) prevBtn.disabled = (pageNum === 1);
  if (nextBtn) nextBtn.disabled = (pageNum >= totalPages);
}

function changePage(character, direction) {
  const currentPage = parseInt(document.getElementById('page-num-' + character)?.textContent || 1);
  const grid = document.getElementById('grid-' + character);
  const totalPages = grid ? Math.ceil(grid.querySelectorAll('.mv-card').length / CARDS_PER_PAGE) || 1 : 1;
  
  const newPage = currentPage + direction;
  if (newPage < 1 || newPage > totalPages) return;
  
  showPage(character, newPage);
}

// ==========================================
// MULTI-CHARACTER FILTERING (TOGGLE MULTIPLE)
// ==========================================

// Track which characters are selected
let selectedCharacters = new Set(['all']);

function filterMulti(character, clickedChip) {
  const grid = document.getElementById('grid-multi');
  if (!grid) return;
  
  const allCards = Array.from(grid.querySelectorAll('.mv-card'));
  const allChips = document.querySelectorAll('.mv-filter-chip');
  
  // Handle "ALL" button specially
  if (character === 'all') {
    selectedCharacters.clear();
    selectedCharacters.add('all');
    
    // Update UI: remove active from all, then add to ALL
    allChips.forEach(chip => chip.classList.remove('active'));
    if (clickedChip) clickedChip.classList.add('active');
    
    // Show all cards
    allCards.forEach(card => card.style.display = 'block');
    
    // Reset pagination
    initPaginationForGrid('multi', allCards);
    return;
  }
  
  // Remove 'all' from selection if we're clicking a specific character
  selectedCharacters.delete('all');
  
  // Toggle this character on/off
  if (selectedCharacters.has(character)) {
    selectedCharacters.delete(character);
    if (clickedChip) clickedChip.classList.remove('active');
  } else {
    selectedCharacters.add(character);
    if (clickedChip) clickedChip.classList.add('active');
  }
  
  // Remove active from the ALL button since we're in multi-select mode
  allChips.forEach(chip => {
    // Check if this is the ALL button by looking at its onclick or text
    const onclickText = chip.getAttribute('onclick') || '';
    const isAllButton = onclickText.includes("'all'") || chip.textContent.trim() === 'ALL';
    if (isAllButton) {
      chip.classList.remove('active');
    }
  });
  
  // If nothing selected, default back to all
  if (selectedCharacters.size === 0) {
    selectedCharacters.add('all');
    // Find and activate the ALL button
    allChips.forEach(chip => {
      const onclickText = chip.getAttribute('onclick') || '';
      const isAllButton = onclickText.includes("'all'") || chip.textContent.trim() === 'ALL';
      if (isAllButton) {
        chip.classList.add('active');
      }
    });
  }
  
  // Filter cards - show if card has ANY of the selected characters
  const visibleCards = allCards.filter(card => {
    const cardChars = card.getAttribute('data-characters') || '';
    // Check if card matches ANY selected character
    for (let char of selectedCharacters) {
      if (cardChars.includes(char)) return true;
    }
    return false;
  });
  
  // Hide all, then show filtered
  allCards.forEach(card => card.style.display = 'none');
  visibleCards.forEach(card => card.style.display = 'block');
  
  // Re-initialize pagination for filtered view
  initPaginationForGrid('multi', visibleCards);
}

// Helper to re-init pagination for a specific grid with specific cards
function initPaginationForGrid(character, cards) {
  const totalPages = Math.ceil(cards.length / CARDS_PER_PAGE) || 1;
  
  // Re-assign data-page based on visible cards only
  cards.forEach((card, index) => {
    const pageNum = Math.floor(index / CARDS_PER_PAGE) + 1;
    card.setAttribute('data-page', pageNum);
  });
  
  // Update total
  const totalEl = document.getElementById('page-total-' + character);
  if (totalEl) totalEl.textContent = totalPages;
  
  // Reset to page 1 and show only page 1 cards
  const pageNumEl = document.getElementById('page-num-' + character);
  if (pageNumEl) pageNumEl.textContent = 1;
  
  // Hide all first
  const grid = document.getElementById('grid-' + character);
  if (grid) {
    grid.querySelectorAll('.mv-card').forEach(card => card.style.display = 'none');
  }
  
  // Show only page 1 cards (those with data-page="1")
  cards.forEach(card => {
    if (card.getAttribute('data-page') === '1') {
      card.style.display = 'block';
    }
  });
  
  // Update button states
  const prevBtn = document.getElementById('prev-' + character);
  const nextBtn = document.getElementById('next-' + character);
  if (prevBtn) prevBtn.disabled = true;
  if (nextBtn) nextBtn.disabled = (totalPages <= 1);
}

// Chaos shuffle
function shuffleChaos() {
  const grid = document.getElementById('grid-chaos');
  const cards = Array.from(grid.querySelectorAll('.mv-card'));
  
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  
  cards.forEach(card => grid.appendChild(card));
  showPage('chaos', 1);
  
  const btn = document.querySelector('.mv-shuffle-btn');
  btn.textContent = '🔀 SHUFFLED!';
  setTimeout(() => btn.textContent = '🔀 SHUFFLE THE DECK', 1000);
}

// Initialize on load
document.addEventListener("DOMContentLoaded", initPagination);