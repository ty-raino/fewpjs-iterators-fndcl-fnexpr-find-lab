function superbowlWin(arr) {
 const win = arr.find(s => s.result === "W");
    return win ? win.year : undefined;
};
