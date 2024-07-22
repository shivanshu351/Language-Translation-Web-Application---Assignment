const translate = require('translate-google-api');

const giveTranslatedText = async (req, res) => {
  const { text, sourceLang, targetLang } = req.body;
  try {
    const result = await translate(text, { from: sourceLang, to: targetLang });
    
    res.status(200).json({ translatedText: result[0] });
  } catch (error) {
    console.error('Translation error:', error); // Log the detailed error
    res.status(500).json({ error: 'Translation failed' });
  }
};

module.exports = giveTranslatedText;
