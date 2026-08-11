export function BrazilFlag() {
  return (
    <svg viewBox="0 0 60 30" className="h-full w-full rounded-sm" preserveAspectRatio="xMidYMid slice">
      <rect width="60" height="30" fill="#009c3b" />
      <polygon points="30,3 44,15 30,27 16,15" fill="#ffdf00" />
      <circle cx="30" cy="15" r="8" fill="#002776" />
    </svg>
  );
}

export function UsFlag() {
  return (
    <svg viewBox="0 0 60 30" className="h-full w-full rounded-sm" preserveAspectRatio="xMidYMid slice">
      <rect width="60" height="30" fill="#b22234" />
      <g fill="#fff">
        <rect y="3" width="60" height="3" />
        <rect y="9" width="60" height="3" />
        <rect y="15" width="60" height="3" />
        <rect y="21" width="60" height="3" />
        <rect y="27" width="60" height="3" />
      </g>
      <rect width="26" height="15" fill="#3c3b6e" />
      <g fill="#fff">
        {Array.from({ length: 5 }).map((_, row) => (
          Array.from({ length: row % 2 === 0 ? 6 : 5 }).map((__, col) => (
            <circle key={`${row}-${col}`} cx={4 + col * 4.4 + (row % 2 === 0 ? 0 : 2)} cy={3.5 + row * 3} r="1" />
          ))
        ))}
      </g>
    </svg>
  );
}
