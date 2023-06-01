import { writeFile } from "fs/promises"
import { error } from "@sveltejs/kit"

export const actions = {
	upload: async ({ cookies, request, locals }) => {
		const data = await request.formData()
		// console.log(data)

		const file = data.get("file")
		// console.log(file.name)
		// console.log(file.text())
		// await writeFile(`./files/${file.name}`, file.stream())
		if (file.name == "undefined") {
			throw error(400, { message: "File is not valid." })
		} else {
			await writeFile(`./files/data.csv`, file.stream())
		}

		return { success: true }
	},
}
