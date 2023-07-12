export const Footer = () => {
  return (
    <div className="footer">
      <ul for="brand" class="brand">
        <li>
          <a href="#">
            <img
              className="footerimg"
              src="https://cdn.leonardo.ai/users/9a01fe03-e38d-4147-9504-334e27fe8920/generations/0bb7f5de-d3f2-4952-8d3a-4f8832fe3ca0/DreamShaper_v5_coffee_logo_with_a_dark_style_0.jpg"
              alt="ElevenCoffee"
            />
            Distruta los pequeños momentos.
          </a>
        </li>
      </ul>

      <ul>
        <li>
          <a target={"_blank"} href="https://goo.gl/maps/ea3ied8wUfwkTSh98">
            {" "}
            <img
              className="footerimg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShNnAfd6GQF_69PpBDAuviyQBZvw9vYsWQHA&usqp=CAU"
              alt=""
            />
          </a>
        </li>
        <hr />
        <li>
          <a
            target={"_blank"}
            href="https://www.instagram.com/brusselschocolates/"
          >
            <img
              className="footerimg"
              src="https://banner2.cleanpng.com/20200626/fxi/transparent-instagram-logo-icon-5ef5b92a53cea4.0701610815931620263433.jpg"
              alt=""
            />
          </a>
        </li>
        <hr />
        <li>
          <a target={"_blank"} href="https://web.whatsapp.com">
            <img
              className="footerimg"
              src="data:image/png;base64,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"
              alt=""
            />
          </a>
        </li>
      </ul>
    </div>
  );
};
