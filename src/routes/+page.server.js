import { writeFile } from "fs/promises"

export const actions = {
	upload: async ({ cookies, request, locals }) => {
		const data = await request.formData()
		// console.log(data)

		const file = data.get("file")
		// console.log(file.name)
		// console.log(file.text())
		// await writeFile(`./files/${file.name}`, file.stream())
		await writeFile(`./files/data.csv`, file.stream())

		return { success: true }
	},
}
