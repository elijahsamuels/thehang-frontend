import pianoDog from "../../images/pianodog.jpg";

const userImage = (user) => { return !!user.imageUrl ? user.imageUrl : pianoDog };

export default userImage;