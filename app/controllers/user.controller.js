export const allAccess = (req, res) => {
    res.status(200).send("Public Content.");
}

export const userBoard = async (req, res) => {
    try {
        res.status(200).json({
            message: "User Content",
        });
    } catch (error) {
        res.status(500).json({ message: "Hubo un error al obtener los eventos.", error: error.message });
    }
};


export const adminBoard = (req, res) => {
    try {
        res.status(200).json({
            message: "Admin Content",
        });
    } catch (error) {
        res.status(500).json({ message: "Hubo un error al obtener los eventos.", error: error.message });
    }
}

export const moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
}
