/**
 * Opens a new link that starts the creation of a tweet
 * @param tweet
 * @param text
 * @constructor
 */
export const TweetIntent = ({ tweet, text }: { tweet: string; text: string }) => {
  return (
    <a
      target="_blank"
      className="twitter-share-button"
      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`}
    >
      {text}
    </a>
  )
}
