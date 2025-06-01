import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getStatusBadgeColor(status: string) {
  switch (status) {
    case 'Pending':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200'
    case 'Preparing':
      return 'bg-blue-100 text-blue-800 border-blue-200'
    case 'Out for Delivery':
      return 'bg-purple-100 text-purple-800 border-purple-200'
    case 'Delivered':
      return 'bg-green-100 text-green-800 border-green-200'
    case 'Cancelled':
      return 'bg-red-100 text-red-800 border-red-200'
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200'
  }
}
