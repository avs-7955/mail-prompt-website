import { writeFile } from "fs/promises"
import { base } from "$app/paths"
import { error } from "@sveltejs/kit"
import { redirect } from "@sveltejs/kit"

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
			// creating the file on the frontend
			await writeFile(`./src/files/data.csv`, file.stream())
			// creating the file on the backend server
			await writeFile(
				`C:/Users/ayush/Desktop/text-area-input-format/files/new.csv`,
				file.stream()
			)
		}
		// upon successful file creation, redirecting to the dashboard
		throw redirect(302, "./dashboard")
	},
}
