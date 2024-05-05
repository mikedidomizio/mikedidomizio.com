import { test } from '@playwright/test'
import fs from 'fs'

const theme = 'light'

type ImageToGenerate = {
  name: string
  width: number
  height: number
}

// the following dimensions and best practices are taken from https://kinsta.com/blog/social-media-image-sizes
const linkedInShared: ImageToGenerate = {
  name: 'linkedIn.png',
  width: 520,
  height: 272,
} as const

const posts = ['the-cost-of-doing-it-later']

for (const post of posts) {
  test(`taking screenshots for ${post}`, async ({ page }) => {
    await page.goto(`http://localhost:3000/blog/${post}`)

    await page.evaluate((innerTheme) => {
      localStorage.setItem('theme', innerTheme)
    }, theme)

    await page.reload()

    const { name: imageName, width: imageWidth, height: imageHeight } = linkedInShared

    await page.setViewportSize({ width: imageWidth, height: imageHeight + 100 })

    const baseDirectory = `public/static/images/social-media-sharing/`

    const dir = `${baseDirectory}${post}`

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    await page.screenshot({
      path: `${baseDirectory}${post}/${imageName}`,
      clip: {
        y: 100,
        x: 0,
        width: imageWidth,
        height: imageHeight,
      },
    })
  })

}
