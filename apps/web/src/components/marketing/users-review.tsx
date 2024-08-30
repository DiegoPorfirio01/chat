import React from 'react'

import { UsersReviewCards } from './users-review-cards'

export default function UserReviews() {
  return (
    <div className="flex flex-col justify-center space-y-6 md:flex-row md:space-x-6 md:space-y-0">
      <UsersReviewCards />
    </div>
  )
}
