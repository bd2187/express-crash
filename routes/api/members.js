const express = require("express");
const uuid = require("uuid");
const router = express.Router();
const members = require("../../assets/members");

// get single member
router.get("/:id", (req, res) => {
    var member = null;
    for (let i = 0; i < members.length && !member; i++) {
        if (parseInt(members[i].id) === parseInt(req.params.id)) {
            member = members[i];
        }
    }

    member === null
        ? res.status(400).json({ status: "error", message: "member not found" })
        : res.json({
              status: "success",
              message: "member found",
              data: member
          });
});

// get all members
router.get("/", (req, res) => {
    res.json(members);
});

// create member
router.post("/", (req, res) => {
    const newMember = {
        id: uuid.v4(),
        email: req.body.email,
        active: true
    };

    if (!newMember.email) {
        res.status(400).json({
            status: "error",
            message: "missing email"
        });
    } else {
        members.push(newMember);
        res.json({
            status: "success",
            message: "email saved",
            data: members
        });
    }
});

// update member
router.put("/:id", (req, res) => {
    var member = null;
    for (let i = 0; i < members.length && !member; i++) {
        if (parseInt(members[i].id) === parseInt(req.params.id)) {
            member = members[i];
        }
    }

    if (member === null) {
        res.status(400).json({ status: "error", message: "member not found" });
    } else {
        member.email = req.body.email;

        var updated_members = members.map(function(item) {
            if (parseInt(item.id) === parseInt(req.params.id)) {
                return member;
            } else {
                return item;
            }
        });

        console.log(updated_members);

        res.json({
            status: "success",
            message: "updated member info",
            data: member
        });
    }
});

// delete member
router.delete("/:id", (req, res) => {
    var member = null;

    var updated_members = members.filter(function(item) {
        if (parseInt(item.id) !== parseInt(req.params.id)) {
            return item;
        } else {
            member = item;
        }
    });

    if (member === null) {
        res.status(400).json({ status: "error", message: "member not found" });
    } else {
        res.json({
            status: "success",
            message: "successfully deleted account",
            data: member
        });
    }
});

module.exports = router;
