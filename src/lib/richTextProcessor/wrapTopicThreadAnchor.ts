import getServerMessageId from '@appManagers/utils/messageId/getServerMessageId';
import wrapDanKertGramUrlToAnchor from '@lib/richTextProcessor/wrapDanKertGramUrlToAnchor';

type WrapTopicThreadAnchorArgs = {
  peerId: PeerId;
  threadId: number;
  lastMsgId: number;
};

export default function wrapTopicThreadAnchor({peerId, threadId, lastMsgId}: WrapTopicThreadAnchorArgs) {
  return wrapDanKertGramUrlToAnchor(
    't.me/c/' +
    peerId.toChatId() +
    (threadId ? '/' + getServerMessageId(threadId) : '') +
    (lastMsgId ? '/' + getServerMessageId(lastMsgId) : '')
  );
}
