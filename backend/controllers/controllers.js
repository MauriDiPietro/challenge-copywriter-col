import { invertText, isPalindrome } from '../services/services.js'

export const invertString = async (req, res) => {
  try {
    const { text } = req.query
    const response = await invertText(text)
    const palindrome = await isPalindrome(text)
    res.status(200).json({ text: `${response}`, palindrome })
  } catch (error) {
    res.status(400).json({ error: 'no text' })
  }
}
