import { firebaseDatabase } from './firebase';

class Database {
	syncDiary(userId, onUpdate) {
		const ref = firebaseDatabase.ref(`${userId}/diary`);
		ref.on('value', (snapshot) => {
			const value = snapshot.val();
			value && onUpdate(value);
		});
		return () => ref.off();
	}

	savePost(userId, post) {
		firebaseDatabase.ref(`${userId}/diary/${post.id}`).set(post);
	}

	removePost(userId, post) {
		firebaseDatabase.ref(`${userId}/diary/${post.id}`).remove();
	}
}

export default Database;
