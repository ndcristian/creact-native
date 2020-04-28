 module.exports = {
   getLocalDate: function() {
     let date = new Date();

     let day = date.getUTCDate();
     let month = date.getUTCMonth()+1;
     let year = date.getUTCFullYear();
     let hour = date.getUTCHours() + 3;
     let minutes = date.getUTCMinutes();
     let seconds = date.getUTCSeconds();
     
    
     //var localData = new Date(year, month, day, hour, minutes, seconds);
     var localDateString = year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds
     
     return localDateString
     //      var now_utc = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
     //        date.getUTCHours() + 3, date.getUTCMinutes(), date.getUTCSeconds());

     //      now_utc = new Date().toLocaleString("en-US", {
     //        timeZone: "America/New_York"
   }
 };