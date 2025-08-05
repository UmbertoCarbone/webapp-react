export default function FormReviews({ 
    handleSubmit, 
    formData, 
    setFormData, 
    reviews 
}) {
    return (
        <div className="mt-5">
            <h3 className="text-white mb-3">📝 Recensioni</h3>
            {/* Form Recensione */}
            <div className="mt-4">
                <h3 className="text-white mb-3">Scrivi una recensione</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="form-control bg-dark text-white border-secondary mb-3"
                        placeholder="Il tuo nome..."
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        minLength="2"
                        maxLength="50"
                    />

                    <input
                        type="number"
                        name="vote"
                        id="vote"
                        className="form-control bg-dark text-white border-secondary mb-3"
                        placeholder="Voto da 1 a 5..."
                        min="1"
                        max="5"
                        value={formData.vote}
                        onChange={(e) => setFormData({ ...formData, vote: e.target.value })}
                        required
                    />

                    <textarea
                        className="form-control bg-dark text-white border-secondary mb-3"
                        rows="4"
                        placeholder="Condividi la tua opinione sul film..."
                        value={formData.text}
                        onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                        required
                        minLength="5"
                        maxLength="255"
                    />
                    <button type="submit" className="btn-grad">
                        Aggiungi Recensione
                    </button>
                </form>
            </div>
            {/* Lista Recensioni */}
            {reviews?.map((review, index) => (
                <div key={index} className="bg-dark p-3 rounded mb-3">
                    <p className="text-white-50 mb-0">{review.name}</p>
                    <p className="text-white-50 mb-0">Voto: {review.vote}</p>
                    <p className="text-white-50 mb-0">{review.text}</p>
                </div>
            ))}
        </div>
    );
}