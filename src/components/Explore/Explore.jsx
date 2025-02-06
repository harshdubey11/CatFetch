import React, { useEffect, useState } from "react";
import Styles from "./Explore.module.scss";
import Topbar from "../topbar/topbar";
import { Button, Select } from "@chakra-ui/react";
import { getAllTags} from "../../services/apicalls";

import axios from "axios";
import Footer from "../Footer/Footer";

function Explore() {
  const [allTags, setTags] = useState([]);
  const [InputFields, setInputFields] = useState(null);
  const [image, setImage] = useState("");

  const getimage = () => {
    axios
      .get("https://cataas.com" + "/cat")
      .then((res) => {
        setImage(res.data);
      });
  };
  const handleInputChange = ({ target: { name, value } }) => {
    setInputFields((prev) => ({ ...prev, [name]: value }));
  };
  useEffect(() => {
    fetchTags();
    setImage("");
  }, [InputFields]);

  async function fetchTags() {
    try {
      const response = await getAllTags();
      setTags(response.data);
      console.log("resp", allTags);
    } catch (error) {
      console.log(error);
    }
  }

  async function GetImageBytag() {
    axios
      .get("https://cataas.com" + "/cat/" + InputFields.tag)
      .then((res) => {
        console.log("url",res.data);
        setImage(res.data);
      });
  }

  return (
    <>
    <div className={Styles.container}>
      <Topbar />
      <div className={Styles.buttons}>
        <div>
          <Select
            onChange={handleInputChange}
            name="tag"
            placeholder="Select Tag"
            size="lg"
            className={Styles.tags}
          >
            {allTags.map((item, idx) => (
              <option key={item + idx} value={item}>
                {item}
              </option>
            ))}
          </Select>
        </div>
        {InputFields?.tag ? (
          <Button className={Styles.button} onClick={GetImageBytag}>
            Get by Tag
          </Button>
        ) : (
          <Button className={Styles.button} onClick={getimage}>
            Get A Random Cat!
          </Button>
        )}
        {image ? (
          <div className="image">
            <img src={image.url} />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
    <Footer></Footer>
    </>
  );
}

export default Explore;
