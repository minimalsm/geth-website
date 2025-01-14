import { createIcon } from '@chakra-ui/icons';

export const HamburgerIcon = createIcon({
  displayName: 'HamburgerIcon',
  viewBox: '0 0 22 14',
  path: (
    <svg width={22} height={14} fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0 .5h22v.97H0V.5Zm0 6.017h22v.97H0v-.97Zm22 6.013H0v.97h22v-.97Z'
        fill='currentColor'
      />
    </svg>
  )
});
