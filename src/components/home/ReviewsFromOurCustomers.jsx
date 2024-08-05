import React from 'react';

// Example data
const reviewsData = [
  {
    name: 'Artem Chugarov',
    date: '17 июля',
    rating: 5,
    review: 'Продукция, поставляемая компанией ЭКОР, всегда соответствует высоким стандартам качества. Свежесть, вкус и безопасность — основные критерии при выборе продуктов для нашего меню, и компания ЭКОР полностью соответствует этим требованиям...',
  },
  // Add more reviews as needed
];

const ReviewsFromOurCustomers = () => {
  return (
    <section className="p-5 bg-gray-100">
      <div className="containerb mx-auto p-6 rounded-lg">
        <h2 className='text-4xl font-semibold text-blue-800 mb-5'>Отзывы наших покупателей</h2>

        <p className='text-sm text-blue-800 font-medium mb-8'>
          Прочитайте реальные отзывы прямо на сайте <br /> или оставьте его на Яндекс.Картах
        </p>
        
        <div className="grid gap-6">
          {reviewsData.map((review, index) => (
            <div key={index} className="p-5 border rounded-lg bg-white shadow-lg flex">
              <div className="mr-5">
                <h3 className="text-6xl font-bold text-blue-800">4,7</h3>
                <div className="flex items-center mt-2">
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.964a1 1 0 00.95.69h4.174c.969 0 1.372 1.24.588 1.81l-3.375 2.452a1 1 0 00-.363 1.118l1.287 3.964c.3.921-.755 1.688-1.538 1.118l-3.375-2.452a1 1 0 00-1.175 0l-3.375 2.452c-.782.57-1.837-.197-1.538-1.118l1.287-3.964a1 1 0 00-.363-1.118L2.85 9.391c-.784-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69L9.049 2.927z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="ml-2 text-sm text-gray-600">(77 отзывов / 169 оценок)</p>
                </div>
                <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-full">Оставить отзыв</button>
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-300 flex items-center justify-center mr-4">
                    <span className="text-white text-2xl">{review.name[0]}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{review.name}</h4>
                    <p className="text-sm text-gray-600">{review.date}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{review.review}</p>
                <a href="#" className="text-blue-600 font-semibold">Подробнее</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReviewsFromOurCustomers;
