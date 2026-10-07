'use client'

import { useMemo, useState } from 'react'

const productCatalog = [
  {
    id: 1,
    name: 'Aero Shield',
    price: 39,
    tag: 'Best seller',
    accent: '#ff6b6b',
    model: 'iPhone 15 Pro',
  },
  {
    id: 2,
    name: 'Night Drift',
    price: 44,
    tag: 'New',
    accent: '#6b7cff',
    model: 'Samsung S24',
  },
  {
    id: 3,
    name: 'Monarch Pro',
    price: 48,
    tag: 'Limited',
    accent: '#f5d76d',
    model: 'Pixel 8 Pro',
  },
]

const palette = ['#ff6b6b', '#6b7cff', '#0f172a', '#29c6a6', '#f5d76d']

export default function HomePage() {
  const [selectedColor, setSelectedColor] = useState('#ff6b6b')
  const [selectedModel, setSelectedModel] = useState('iPhone 15 Pro')

  const featuredProduct = useMemo(
    () => productCatalog.find((item) => item.model === selectedModel) ?? productCatalog[0],
    [selectedModel],
  )

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">C</div>
          <div className="brand-copy">
            <span>Case</span>
            <strong>Forge</strong>
          </div>
        </div>

        <nav className="nav">
          <a href="#shop">Shop</a>
          <a href="#custom">Custom</a>
          <a href="#reviews">Reviews</a>
          <a href="#support">Support</a>
        </nav>

        <div className="top-actions">
          <button className="ghost-btn">Search</button>
          <button className="primary-btn">Cart (2)</button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">Premium drop 2026</span>
            <h1>Protect your phone with a statement.</h1>
            <p>
              Crafted for clarity, grip, and everyday impact. Choose your finish, match your
              device, and make it yours.
            </p>

            <div className="cta-row">
              <button className="primary-btn large">Shop now</button>
              <button className="secondary-btn large">Customize</button>
            </div>

            <ul className="stats-list">
              <li>
                <strong>18k+</strong>
                <span>happy users</span>
              </li>
              <li>
                <strong>4.9/5</strong>
                <span>average rating</span>
              </li>
              <li>
                <strong>2-day</strong>
                <span>shipping</span>
              </li>
            </ul>
          </div>

          <div className="hero-visual" aria-label="3D phone case showcase">
            <div className="orb orb-one" />
            <div className="orb orb-two" />

            <div className="phone-scene">
              <div
                className="phone-shell"
                style={{
                  '--case-color': selectedColor,
                  '--device-glow': selectedColor,
                }}
              >
                <div className="screen">
                  <div className="screen-ui">
                    <div className="ui-top" />
                    <div className="widget-block long" />
                    <div className="widget-grid">
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="widget-block short" />
                  </div>
                </div>
              </div>
            </div>

            <div className="floating-card">
              <span className="chip">Featured</span>
              <h3>{featuredProduct.name}</h3>
              <div className="mini-meta">
                <span>{selectedModel}</span>
                <strong>${featuredProduct.price}</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="customizer" id="custom">
          <div className="section-heading">
            <span className="eyebrow">Customize</span>
            <h2>Pick your perfect finish.</h2>
          </div>

          <div className="customizer-grid">
            <div className="selector-panel">
              <label htmlFor="device-model">Device</label>
              <select
                id="device-model"
                value={selectedModel}
                onChange={(event) => setSelectedModel(event.target.value)}
              >
                <option>iPhone 15 Pro</option>
                <option>Samsung S24</option>
                <option>Pixel 8 Pro</option>
              </select>

              <div className="color-picker-wrap">
                <label>Case color</label>
                <div className="color-picker">
                  {palette.map((color) => (
                    <button
                      key={color}
                      className={selectedColor === color ? 'color-dot active' : 'color-dot'}
                      style={{ background: color }}
                      type="button"
                      aria-label={`Select color ${color}`}
                      onClick={() => setSelectedColor(color)}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="spec-panel">
              <div className="spec-top-row">
                <span className="little-tag">{featuredProduct.tag}</span>
                <span className="price">${featuredProduct.price}</span>
              </div>
              <h3>{featuredProduct.name}</h3>
              <p>
                Impact-resistant polymer shell with matte finish and raised corner protection.
              </p>
              <ul>
                <li>Shock absorbing shell</li>
                <li>MagSafe compatible</li>
                <li>Wireless charging ready</li>
              </ul>
              <button className="primary-btn" type="button">
                Add to cart
              </button>
            </div>
          </div>
        </section>

        <section className="catalog" id="shop">
          <div className="section-heading">
            <span className="eyebrow">Best sellers</span>
            <h2>Made for every vibe.</h2>
          </div>

          <div className="product-grid">
            {productCatalog.map((product) => (
              <article className="product-card" key={product.id}>
                <div className="product-thumb" style={{ background: product.accent }}>
                  <div className="mini-phone">
                    <span className="mini-camera" />
                  </div>
                </div>
                <div className="product-info">
                  <div className="product-row">
                    <span className="little-tag">{product.tag}</span>
                    <span className="price">${product.price}</span>
                  </div>
                  <h3>{product.name}</h3>
                  <p>{product.model}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="features" id="reviews">
          <div className="feature-box">
            <span>◎</span>
            <h3>Drop-tested</h3>
            <p>Built to survive everyday bumps and scratches.</p>
          </div>
          <div className="feature-box">
            <span>◎</span>
            <h3>Precision fit</h3>
            <p>Tailored for a clean, secure, and comfortable hold.</p>
          </div>
          <div className="feature-box">
            <span>◎</span>
            <h3>Premium finish</h3>
            <p>Matte, gloss, and soft-touch textures for any style.</p>
          </div>
        </section>
      </main>

      <footer className="footer" id="support">
        <div>
          <strong>CaseForge</strong>
        </div>
        <div>Free shipping over $50</div>
        <div>hello@caseforge.com</div>
      </footer>
    </div>
  )
}
