import React from "react";

import { View } from "react-native";
import { Txt } from "../../components/shared";

const APOSTLES_CREED = (
  <View>
    <Txt first>I believe in God, the Father almighty,</Txt>
    <Txt noMargin style={{ marginLeft: 30 }}>
      creator of heaven and earth.
    </Txt>
    <Txt>I believe in Jesus Christ, his only Son, our Lord,</Txt>
    <Txt noMargin style={{ marginLeft: 30 }}>
      who was conceived by the Holy Spirit
    </Txt>
    <Txt noMargin style={{ marginLeft: 30 }}>
      and born of the virgin Mary.
    </Txt>
    <Txt noMargin style={{ marginLeft: 30 }}>
      He suffered under Pontius Pilate,
    </Txt>
    <Txt noMargin style={{ marginLeft: 30 }}>
      was crucified, died, and was buried;
    </Txt>
    <Txt noMargin style={{ marginLeft: 30 }}>
      he descended to hell.
    </Txt>
    <Txt noMargin style={{ marginLeft: 30 }}>
      The third day he rose again from the dead.
    </Txt>
    <Txt noMargin style={{ marginLeft: 30 }}>
      He ascended to heaven
    </Txt>
    <Txt noMargin style={{ marginLeft: 30 }}>
      and is seated at the right hand of God the Father almighty.
    </Txt>
    <Txt noMargin style={{ marginLeft: 30 }}>
      From there he will come to judge the living and the dead.
    </Txt>
    <Txt>I believe in the Holy Spirit,</Txt>
    <Txt noMargin style={{ marginLeft: 30 }}>
      the holy catholic* church,
    </Txt>
    <Txt noMargin style={{ marginLeft: 30 }}>
      the communion of saints,
    </Txt>
    <Txt noMargin style={{ marginLeft: 30 }}>
      the forgiveness of sins,
    </Txt>
    <Txt noMargin style={{ marginLeft: 30 }}>
      the resurrection of the body,
    </Txt>
    <Txt noMargin style={{ marginLeft: 30 }}>
      and the life everlasting. Amen.
    </Txt>
    <Txt style={{ fontStyle: "italic" }}>
      * that is, the true Christian church of all times and all places
    </Txt>
  </View>
);

export default APOSTLES_CREED;
