import Tutor from "../../models/Tutor.js";
import Language from "../../models/Language.js";

export const addCourse = async (req, res) => {
    try {
        const tutor = await Tutor.findById(req.params.id);
        const language = await Language.findById(req.params.lid);
        
        
        const {languageID,proficency,stripe_key1, duration1,cost1, stripe_key2, duration2, cost2, stripe_key3, duration3, cost3} = req.body;
        
        

        const newCourse = {
            languageID: language._id,
            proficency: proficency,
            prices: [
                {
                    stripe_key: stripe_key1,
                    duration: duration1,
                    cost: cost1
                },
                {
                    stripe_key: stripe_key2,
                    duration: duration2,
                    cost: cost2
                },
                {
                    stripe_product_key: stripe_key3,
                    duration: duration3,
                    cost: cost3
                }
            ]
        }

        tutor.languages.push(newCourse);

        
        await tutor.save();
        res.status(200).json({ message: "Course added successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}

export default addCourse;