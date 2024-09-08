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

const calcGameStatus = (squares) => {
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return {
                started: true,
                ended: true,
                winner: squares[a]
            };
        };
    }
    if (squares.every((cell) => cell !== null)) {
        return {
            started: true,
            ended: true,
            winner: null
        };
    }
    return {
        started: squares.some((cell) => cell !== null),
        ended: false,
        winner: null
    };
};

const getComputerPosition = (squares) => {
    // 빈 자리 랜덤 선택
    const availableSquares = squares
        .map((sq, index) => (sq === null ? index : null))
        .filter((index) => index !== null);
    return availableSquares[Math.floor(Math.random() * availableSquares.length)];
};

export { calcGameStatus, getComputerPosition };