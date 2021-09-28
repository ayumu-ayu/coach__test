



//問題１＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿

// 以下のような重複値を含む配列arrayの中から、重複値を除く配列を作成して下さい。

// ​const array = [2, 4, 7, 5, 4, 3, 8];
// 条件としては以下の4つが挙げられます。

// filterを利用する
// indexOfを利用する
// 返り値を使用する
// 結果をコンソールに出力する



const array = [2, 4, 7, 5, 4, 3, 8];

const newArray = array.filter(function(ele, index, arr){
  return arr.indexOf(ele) === arr.lastIndexOf(ele) ;
});

console.log(newArray);




//問題２_________________________________________

// 2020年と2021年がうるう年かどうかを判定するコードを記述してください。
// 条件としては以下の5つが挙げられます。

// if文を使用する
// leapYearという関数を使用する
// 引数に西暦を渡す
// 返り値を使用する
// 結果はコンソールに出力する
// ※うるう年は以下のように定義されます。

// 西暦が4で割り切れるかつ100で割り切れない
// 西暦が400で割り切れる


const leapYear=function (year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    return '西暦' + year + '年は閏年です。';
  } else if (year % 400 === 0) {
   return '西暦' + year + '年は400で割り切れる閏年です。';
  } else {
   return '西暦' + year + '年は閏年ではありません。'
  }
}


console.log(leapYear(2020));
console.log(leapYear(2021));




