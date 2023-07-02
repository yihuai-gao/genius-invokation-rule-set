const CLASS_NAME_MAP = {
  GCG_COST_DICE_CRYO: "cryo-dice",
  GCG_COST_DICE_HYDRO: "hydro-dice",
  GCG_COST_DICE_PYRO: "pyro-dice",
  GCG_COST_DICE_ELECTRO: "electro-dice",
  GCG_COST_DICE_ANEMO: "anemo-dice",
  GCG_COST_DICE_GEO: "geo-dice",
  GCG_COST_DICE_DENDRO: "dendro-dice",
  GCG_COST_ENERGY: "energy",
  GCG_COST_DICE_SAME: "matched-dice",
  GCG_COST_DICE_VOID: "unaligned-dice",
};
export function toDiceTypeClass(type: string) {
  return CLASS_NAME_MAP[type] ?? "";
}
