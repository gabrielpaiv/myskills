describe('My first tests', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible()
  })
  it('must register a new skill', async () => {
    const newSkillInput = await element(by.id('new-input'))
    const addButton = await element(by.id('add-button'))
    const skillsFlatList = await element(by.id('skills-flatlist'))

    await newSkillInput.tap()
    await newSkillInput.typeText('React Native')
    await addButton.tap()

    await skillsFlatList.tap()

    expect(element(by.id('skills-flatlist'))).toBeVisible()
  })
})
