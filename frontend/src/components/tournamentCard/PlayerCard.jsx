function PlayerCard() {
  return (
    <div>
      <div className="relative max-w-xs h-20 bg-second_color grid grid-cols-1 gap-4 p-4 m-6 rounded-lg shadow-lg">
        <div className="relative flex gap-4">
          <img
            src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/charlie-chaplin-icon.png"
            className="relative rounded-lg -top-8 -mb-4 bg-transparent h-20 w-20"
            alt="Player Avatar"
            loading="lazy"
          />
          <div className="flex flex-col w-full">
            <div className="flex flex-row justify-between">
              <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">
                Nom du Joueur
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerCard;
