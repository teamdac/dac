export default function Slideshow() {
  return (
    <html>
      <head>
        <style>{`
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f1f5f9; }
.slideshow-container {
  max-width: 100%;
  padding: 20px;
  background: white;
  border-radius: 12px;
  margin: 20px auto;
  max-width: 800px;
}
.slide {
  display: none;
  padding: 40px 30px;
  min-height: 600px;
  animation: fadeIn 0.5s;
}
.slide.active {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
.slide h2 {
  font-size: 28px;
  font-weight: 500;
  color: #1e293b;
  margin-bottom: 20px;
}
.slide p {
  font-size: 16px;
  line-height: 1.6;
  color: #64748b;
  margin-bottom: 16px;
}
.slide-comparison {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 30px;
}
.comparison-item {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
}
.comparison-item h3 {
  font-size: 16px;
  font-weight: 500;
  color: #1e293b;
  margin-bottom: 12px;
}
.comparison-item p {
  font-size: 14px;
  color: #64748b;
}
.mock-design {
  background: linear-gradient(135deg, #eff6ff 0%, #f1f5f9 100%);
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #475569;
  font-size: 14px;
  text-align: center;
}
.mock-live {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1e293b;
  font-size: 14px;
  text-align: center;
}
.controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #e2e8f0;
}
.dots {
  display: flex;
  gap: 8px;
  justify-content: center;
}
.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #cbd5e1;
  cursor: pointer;
  transition: background 0.3s;
}
.dot.active {
  background: #3b82f6;
}
button {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s;
}
button:hover { background: #2563eb; }
button:disabled { background: #e2e8f0; cursor: not-allowed; opacity: 0.5; }
.slide-number {
  color: #64748b;
  font-size: 14px;
  font-weight: 500;
}
.icon-section {
  display: flex;
  gap: 30px;
  margin-top: 30px;
  justify-content: center;
  flex-wrap: wrap;
}
.icon-item {
  text-align: center;
}
.icon-box {
  width: 80px;
  height: 80px;
  background: #eff6ff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 12px;
  font-size: 32px;
}
        `}</style>
      </head>
      <body>
        <div className="slideshow-container">
          <div className="slide active">
            <h2>Design Meets Code</h2>
            <p>How Figma designs become the live website you see online</p>
            <div className="icon-section">
              <div className="icon-item">
                <div className="icon-box">🎨</div>
                <p>Design in Figma</p>
              </div>
              <div style={{fontSize: '28px', color: '#64748b'}}>→</div>
              <div className="icon-item">
                <div className="icon-box">💻</div>
                <p>Code in React</p>
              </div>
              <div style={{fontSize: '28px', color: '#64748b'}}>→</div>
              <div className="icon-item">
                <div className="icon-box">🌍</div>
                <p>Live Website</p>
              </div>
            </div>
            <p style={{marginTop: '40px', fontSize: '14px', textAlign: 'center'}}>Click Next to see how it works →</p>
          </div>

          <div className="slide">
            <h2>1. Design in Figma</h2>
            <p>Alyssa designs the visual look in Figma. She creates:</p>
            <div className="slide-comparison">
              <div className="comparison-item">
                <h3>📐 Layout</h3>
                <p>How each page is positioned and arranged</p>
              </div>
              <div className="comparison-item">
                <h3>🎨 Colors</h3>
                <p>Color palette and visual styling</p>
              </div>
              <div className="comparison-item">
                <h3>✍️ Typography</h3>
                <p>Fonts, sizes, and text styling</p>
              </div>
              <div className="comparison-item">
                <h3>🧩 Components</h3>
                <p>Reusable buttons, cards, inputs</p>
              </div>
            </div>
            <div className="mock-design">
              <div>
                <p style={{fontWeight: '500', marginBottom: '12px'}}>Example Figma Design</p>
                <p>Homepage mockup with all visual elements designed</p>
              </div>
            </div>
          </div>

          <div className="slide">
            <h2>2. Code the Website</h2>
            <p>I take the Figma design and code it in React/Next.js:</p>
            <div className="slide-comparison">
              <div className="comparison-item">
                <h3>📄 Pages</h3>
                <p>All 9 pages are working and clickable</p>
              </div>
              <div className="comparison-item">
                <h3>⚙️ Functionality</h3>
                <p>Buttons work, forms submit, navigation works</p>
              </div>
              <div className="comparison-item">
                <h3>📱 Responsive</h3>
                <p>Works on desktop, tablet, mobile</p>
              </div>
              <div className="comparison-item">
                <h3>☁️ Deployed</h3>
                <p>Live online at dac-flame-ten.vercel.app</p>
              </div>
            </div>
            <div className="mock-live">
              <div>
                <p style={{fontWeight: '500', marginBottom: '12px'}}>Live Website</p>
                <p>All pages working, designed per the Figma mockup</p>
              </div>
            </div>
          </div>

          <div className="slide">
            <h2>3. Design → Code Connection</h2>
            <p>The Figma design and the live website are the same thing, just in different formats:</p>
            <div className="slide-comparison">
              <div className="comparison-item">
                <h3>🎨 Figma (Design)</h3>
                <p><strong>What it looks like:</strong></p>
                <p>Visual mockups, colors, layouts, typography</p>
                <p style={{marginTop: '12px', fontSize: '12px'}}>Example: Button is blue, 12px padding, rounded corners</p>
              </div>
              <div className="comparison-item">
                <h3>💻 Website (Code)</h3>
                <p><strong>How it works:</strong></p>
                <p>HTML, CSS, React components, interactivity</p>
                <p style={{marginTop: '12px', fontSize: '12px'}}>Same button, but now it responds to clicks and API calls</p>
              </div>
            </div>
            <p style={{marginTop: '30px', textAlign: 'center', color: '#64748b'}}>Both created from the same design vision</p>
          </div>

          <div className="slide">
            <h2>4. How We Work Together</h2>
            <p>The workflow is simple and iterative:</p>
            <div style={{marginTop: '30px'}}>
              <div style={{display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '25px'}}>
                <div style={{background: '#3b82f6', color: 'white', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '500', flexShrink: 0}}>1</div>
                <div>
                  <p style={{fontWeight: '500', color: '#1e293b'}}>Alyssa Designs</p>
                  <p>She creates beautiful designs in Figma for all pages</p>
                </div>
              </div>
              <div style={{display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '25px'}}>
                <div style={{background: '#3b82f6', color: 'white', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '500', flexShrink: 0}}>2</div>
                <div>
                  <p style={{fontWeight: '500', color: '#1e293b'}}>I Code It</p>
                  <p>I use her design as a reference and code it in React</p>
                </div>
              </div>
              <div style={{display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '25px'}}>
                <div style={{background: '#3b82f6', color: 'white', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '500', flexShrink: 0}}>3</div>
                <div>
                  <p style={{fontWeight: '500', color: '#1e293b'}}>Deploy Live</p>
                  <p>I push to GitHub and Vercel auto-deploys the website</p>
                </div>
              </div>
              <div style={{display: 'flex', alignItems: 'flex-start', gap: '20px'}}>
                <div style={{background: '#3b82f6', color: 'white', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '500', flexShrink: 0}}>4</div>
                <div>
                  <p style={{fontWeight: '500', color: '#1e293b'}}>She Sees It Live</p>
                  <p>Alyssa sees the design come to life on the web</p>
                </div>
              </div>
            </div>
          </div>

          <div className="slide">
            <h2>5. What Alyssa Does Next</h2>
            <p>Your turn, Alyssa! Here's what we need:</p>
            <div className="slide-comparison">
              <div className="comparison-item">
                <h3>🎯 Design Each Page</h3>
                <p>Homepage, courses, dashboard, auth pages, test flow</p>
              </div>
              <div className="comparison-item">
                <h3>🎨 Choose Colors & Fonts</h3>
                <p>Pick the visual style that feels right</p>
              </div>
              <div className="comparison-item">
                <h3>📐 Create Components</h3>
                <p>Design buttons, cards, inputs once, use everywhere</p>
              </div>
              <div className="comparison-item">
                <h3>📤 Share the File</h3>
                <p>Send me the Figma link when you're done</p>
              </div>
            </div>
            <p style={{marginTop: '30px', textAlign: 'center', fontSize: '14px', color: '#64748b'}}>Then I'll code it and show you the live result! 🚀</p>
          </div>

          <div className="controls">
            <button onClick="changeSlide(-1)" id="prev-btn">← Previous</button>
            <div className="dots" id="dots-container"></div>
            <div style={{flex: 1, textAlign: 'center'}}><span className="slide-number"><span id="current-slide">1</span> / 5</span></div>
            <button onClick="changeSlide(1)" id="next-btn">Next →</button>
          </div>
        </div>

        <script>{`
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(n) {
  if (n >= totalSlides) currentSlide = totalSlides - 1;
  if (n < 0) currentSlide = 0;
  
  slides.forEach(slide => slide.classList.remove('active'));
  slides[currentSlide].classList.add('active');
  
  document.getElementById('current-slide').textContent = currentSlide + 1;
  document.getElementById('prev-btn').disabled = currentSlide === 0;
  document.getElementById('next-btn').disabled = currentSlide === totalSlides - 1;
  
  document.querySelectorAll('.dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
}

function changeSlide(n) {
  currentSlide += n;
  showSlide(currentSlide);
}

const dotsContainer = document.getElementById('dots-container');
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement('div');
  dot.className = 'dot';
  dot.onclick = () => { currentSlide = i; showSlide(currentSlide); };
  dotsContainer.appendChild(dot);
}

showSlide(0);

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') changeSlide(-1);
  if (e.key === 'ArrowRight') changeSlide(1);
});
        `}</script>
      </body>
    </html>
  );
}