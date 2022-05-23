export default (context, inject) => {
    const toFarsiNum = (str , withComma) => {
      const persianNumbers = ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۰"]
      const englishNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
      
      if (str === null)
        return ''
      
      let val = str.toString()
      if (withComma === true)
        val = val.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return val.split("").map(c => persianNumbers[englishNumbers.indexOf(c)] || c).join("")
    }
        
    // Inject $toFarsiNum('1234' , true/false) in Vue, context and store...
    inject('toFarsiNum', toFarsiNum)
}