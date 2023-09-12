function IconPokeball(props) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="30px"
      width="30px"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path
        transform="translate(3 3)"
        d="M18 9 A9 9 0 0 1 9 18 A9 9 0 0 1 0 9 A9 9 0 0 1 18 9 z"
      />
      <path d="M15 12 A3 3 0 0 1 12 15 A3 3 0 0 1 9 12 A3 3 0 0 1 15 12 z" />
      <path d="M3 12h6m6 0h6" />
    </svg>
  );
}

export default IconPokeball;