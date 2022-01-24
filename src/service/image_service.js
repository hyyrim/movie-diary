class ImageService {
	async upload(file) {
		const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_API_KEY}/image/upload`;
		const formData = new FormData();

		formData.append('file', file);
		formData.append(
			'upload_preset',
			process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
		);

		const result = await fetch(url, {
			method: 'POST',
			body: formData,
		});
		return await result.json();
	}
}
export default ImageService;
