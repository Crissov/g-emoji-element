describe('g-emoji', function() {
  describe('element creation', function() {
    afterEach(function() {
      document.body.innerHTML = ''
    })

    it('creates from document.createElement', function() {
      const el = document.createElement('g-emoji')
      assert.equal('G-EMOJI', el.nodeName)
    })

    it('creates from constructor', function() {
      const el = new window.GEmojiElement()
      assert.equal('G-EMOJI', el.nodeName)
    })
  })

  describe('in emoji-supporting platforms', function() {
    beforeEach(function() {
      document.body.innerHTML = '<g-emoji>🦖</g-emoji>'
    })

    afterEach(function() {
      document.body.innerHTML = ''
    })

    it('nothing changes', function() {
      const GEmoji = document.querySelector('g-emoji')
      assert.equal(GEmoji.innerHTML, '🦖')
    })
  })

  describe('in non-emoji-supporting platforms', function() {
    beforeEach(function() {
      document.body.innerHTML += '<g-emoji>🦖</g-emoji>'
    })

    afterEach(function() {
      document.body.innerHTML = ''
    })

    it('fallback image is created', function() {
      const GEmoji = document.querySelector('g-emoji')
      const img = GEmoji.querySelector('img')

      assert(img, 'image created')
      assert.equal(GEmoji.textContent, '')
      assert.equal(img.src, 't-rex.png')
      assert.equal(img.alt, 'T-Rex')
    })
  })
})
