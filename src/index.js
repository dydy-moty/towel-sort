
// You should implement your task here.

module.exports = function towelSort (matrix) {
    const arr = [];
    if (!matrix) {
        return [];
    } else {
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 == 0) {
                matrix[i].map(elem => {arr.push(elem)});
            } else {
                for (let j = matrix[i].length-1; j >= 0; j--) {
                    arr.push(matrix[i][j]);
                }
            }
        }
    }
    
    return arr;
}
