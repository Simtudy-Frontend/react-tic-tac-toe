const lines = [
    // 가로
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // 세로
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //대각선
    [0, 4, 8],
    [2, 4, 6]
];


const calcWinner = (squares) => {
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return { winner: squares[a], line: [a, b, c] };
        };
    }
    return { winner: null, line: null };
};


const getComputerPosition = (squares) => {
    // 빈 자리 랜덤 선택
    const availableSquares = squares
        .map((sq, index) => (sq === null ? index : null))
        .filter((index) => index !== null);
    return availableSquares[Math.floor(Math.random() * availableSquares.length)];
};

export { calcWinner, getComputerPosition };