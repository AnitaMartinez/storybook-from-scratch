import Button from './Button'

export default {
    title: 'Button',
    component: Button,
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    children: 'Button primary',
    onClick: console.log(),
}

export const Secondary = Template.bind({})
Secondary.args = {
    children: 'Button secondary',
    secondary: true,
}

export const Tertiary = Template.bind({})
Tertiary.args = {
    children: 'Button secondary',
    tertiary: true,
}

