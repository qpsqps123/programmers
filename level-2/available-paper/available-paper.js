function solution(w, h) {
    let minNum = Math.min(w, h);
    let maxNum = Math.max(w, h);
    function greatestCommonDivisor(maxNum, minNum) {
        return maxNum % minNum === 0 ? minNum : greatestCommonDivisor(minNum, maxNum % minNum)
    }
    let gcd = greatestCommonDivisor(maxNum, minNum);
    return (w * h) - (w + h - gcd)
}
