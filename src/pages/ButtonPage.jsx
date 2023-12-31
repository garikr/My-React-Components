import { GoBell, GoDownload, GoDatabase } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  return (
    <div>
      <div>
        <Button secondary outline rounded className="mb-5">
          <GoBell />
          Click Here!!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          Sea Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
