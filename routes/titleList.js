const express = require("express")
const router = express.Router()
const TitleList = require("../controller/titleList")

router.post("/create", TitleList.createTitleList)
router.put("/update", TitleList.updateTitleList)
router.delete("/delete", TitleList.deleteTitleList)
router.get("/get", TitleList.getTitleList)
router.get("/getall", TitleList.getTitleLists)

module.exports = router