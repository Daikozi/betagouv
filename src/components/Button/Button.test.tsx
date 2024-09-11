import { composeStories } from '@storybook/react'
import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import * as stories from './Button.stories'

const { Example } = composeStories(stories)

describe('Button', () => {
  it('should test Example', async () => {
    await Example.run()

    expect(screen.getByRole('heading', { level: 1, name: 'Home' })).toBeDefined()
  })
})
