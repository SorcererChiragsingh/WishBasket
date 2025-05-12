import { Rating } from "@mui/material";

export default function CustomerReviews() {
  const list = [
    {
      name: "Chirag",
      message:
        "Overall a smooth experience. Found what I needed quickly and checkout was painless. My only gripe is the shipping took a day longer than expected, but the product came in perfect condition. Will probably shop here again.",
      rating: 4,
      imageLink:
        "https://i.ibb.co/fYF5cBdy/Profile-Pic10.jpg",
    },
    {
      name: "Nikhil",
      message:
        "LOVE this site! I ordered a bunch of home essentials and everything arrived earlier than the delivery window. Prices were great and they even threw in a free sample of something I didn’t order. Definitely coming back.",
      rating: 5,
      imageLink:
        "https://i.ibb.co/35kvzdZ6/Profile-Pic5.jpg",
    },
    {
      name: "Rajan",
      message:
        "Not super impressed. The website was kind of laggy on mobile, and the item I ordered looked slightly different from the photo. Customer service did respond, but it took 3 days to hear back. Might look elsewhere next time.",
      rating: 1,
      imageLink:
        "https://i.ibb.co/LXb0c4wQ/Profile-Pic6.jpg",
    },
  ];
  return (
    <section className="flex justify-center">
      <div className="w-full p-5 md:max-w-[900px] flex flex-col gap-3">
        <h1 className="text-center font-semibold text-xl">
          Our customers Feedback
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {list?.map((item) => {
            return (
              <div className="flex flex-col gap-2 p-4 rounded-lg justify-center items-center border">
                <img
                  src={item?.imageLink}
                  className="h-32 w-32 rounded-full object-cover"
                  alt=""
                />
                <h1 className="text-sm font-semibold">{item?.name}</h1>
                <Rating
                  size="small"
                  name="customer-rating"
                  defaultValue={item?.rating}
                  precision={item?.rating}
                  readOnly
                />
                <p className="text-sm text-gray-500 text-center">
                  {item?.message}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
