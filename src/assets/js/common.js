const Common = {
    isLogin: () => {
        if (window.localStorage.getItem('userInfo') == null) {
            return false
        }
        return true
    },
    hasDeviceId: false,
    index2PageCount: (index, count) => Math.ceil(index / (count || 10)), // return lastIndex转总页数
    goBack: () => {
        window.history.go(-1)
    },
  // 获取当前日期
  getNewDate: (reduceDayCount) => {
    //获取过去日期
    let dd = new Date();
    dd.setDate(dd.getDate()-reduceDayCount);//获取AddDayCount天后的日期
    let y = dd.getFullYear();
    let m = dd.getMonth()+1;//获取当前月份的日期
    let d = dd.getDate();
    //判断 月
    if(m < 10){
      m = "0" + m;
    }else{
      m = m;
    }
    //判断 日n
    if(d < 10){
      d = "0" + d;
    }else{
      d = d;
    }
    let before = y+"-"+m+"-"+d;

    // 获取当前日期
     let ddd = new Date();
     let year = ddd.getFullYear();
     let month = ddd.getMonth() + 1; // 记得当前月是要+1的
     let dt = ddd.getDate();
    //判断 月
    if(month < 10){
      month = "0" + month;
    }else{
      month = month;
    }
    //判断 日n
    if(dt < 10){
      dt = "0" + dt;
    }else{
      dt = dt;
    }
     let today = year + "-" + month + "-" + dt;
    return before +'~'+ today

  },
}
module.exports = Common
