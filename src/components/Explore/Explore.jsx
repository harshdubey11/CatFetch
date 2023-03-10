import React, { useEffect, useState } from "react";
import Styles from "./Explore.module.scss";
import Topbar from "../topbar/topbar";
import { Button, Select,useToast } from "@chakra-ui/react";
import { getAllTags, getByTag, getRandomCat } from "../../services/apicalls";

import axios from "axios";
import Footer from "../Footer/Footer";

function Explore() {
  const toast=useToast();
  const [allTags, setTags] = useState([]);
  const [InputFields, setInputFields] = useState(null);
  const [image, setImage] = useState("");

  const getimage = () => {
    axios
      .get("https://cataas.com" + "/cat", {
        responseType: "arraybuffer",
      })
      .then((res) => {
        const base64 = btoa(
          new Uint8Array(res.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );
        setImage(base64);
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
      .get("https://cataas.com" + "/cat/" + InputFields.tag, {
        responseType: "arraybuffer",
      })
      .then((res) => {
        const base64 = btoa(
          new Uint8Array(res.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        )
        setImage(base64);
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
            <img src={`data:image/jpeg;charset=utf-8;base64,${image}`} />
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
