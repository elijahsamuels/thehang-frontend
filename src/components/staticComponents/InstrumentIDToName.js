const InstrumentIDToName = (instrumentID) => {
    const instrumentArray = {
        0: "",
        1: "Guitar",
        2: "Bass",
        3: "Drums",
        4: "Keys",
        5: "Saxophone",
        6: "Trumpet",
    };

    if (!!instrumentID) {
        return instrumentArray[instrumentID];
    } else {
        return "No instrument listed";
    }
};

export default InstrumentIDToName;
