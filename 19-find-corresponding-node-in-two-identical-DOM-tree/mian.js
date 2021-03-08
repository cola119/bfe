/**
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} nodeA
 */
const findCorrespondingNode = (rootA, rootB, target) => {
  if (rootA === target) return rootB;
  const childrenA = Array.from(rootA.children);
  const childrenB = Array.from(rootB.children);
  for (let i = 0; i < childrenA.length; i++) {
    const nodeOrNull = findCorrespondingNode(
      childrenA[i],
      childrenB[i],
      target
    );
    if (nodeOrNull) return nodeOrNull;
  }
  return null;
};
