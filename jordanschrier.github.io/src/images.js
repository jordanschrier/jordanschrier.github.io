/**
 * Library of Cloudinary-stored images to shorten JSX.
 * Checks the user's preferred color scheme and sets the logo sources accordingly.
 */

let logo = "https://res.cloudinary.com/dbcek1nhi/image/upload/v1731344869/main_logo_darkmode_g5xrrr.svg";
let miniLogo = "https://res.cloudinary.com/dbcek1nhi/image/upload/v1731344865/mini_logo_darkmode_roebgg.svg";

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    logo = "https://res.cloudinary.com/dbcek1nhi/image/upload/v1731344869/main_logo_darkmode_g5xrrr.svg";
    miniLogo = "https://res.cloudinary.com/dbcek1nhi/image/upload/v1731344865/mini_logo_darkmode_roebgg.svg";
}else{
    logo = "https://res.cloudinary.com/dbcek1nhi/image/upload/v1723756903/main_logo_as6g0x.svg";
    miniLogo = "https://res.cloudinary.com/dbcek1nhi/image/upload/v1723756854/mini_logo_wwx92b.svg";
}

const images = {
    headshot: "https://res.cloudinary.com/dbcek1nhi/image/upload/v1730238403/JordanSchrier_headshot_mnhjp7.jpg",
    headshotHover: "https://res.cloudinary.com/dbcek1nhi/image/upload/v1730239733/headshot_pattern_c5uqhg.jpg",
    logo,
    miniLogo,

    crochique: {
        thumbnail: "https://res.cloudinary.com/dbcek1nhi/image/upload/v1730217960/Crochique_thumbnail_wlhzj3.jpg",
        hover: "https://res.cloudinary.com/dbcek1nhi/image/upload/v1730234399/crochique_demo_xhtf5k.gif",
        steps: "https://res.cloudinary.com/dbcek1nhi/image/upload/v1730217774/Crochique-steps_h52vxp.jpg",
        persona: "https://res.cloudinary.com/dbcek1nhi/image/upload/v1727050688/Milana_persona_lnwpz2.png",
        wireframe: "https://res.cloudinary.com/dbcek1nhi/image/upload/v1727051181/Crochique_lowfidelity_yzf8dv.png",
        styleTile: "https://res.cloudinary.com/dbcek1nhi/image/upload/v1727051991/Crochique_Style_Tile_mboz4d.png",
        variants: "https://res.cloudinary.com/dbcek1nhi/image/upload/v1730996730/Crochique_Variants_totglt.gif",
    },

    greenway: {
        thumbnail: "https://res.cloudinary.com/dbcek1nhi/image/upload/v1718687976/Greenway_Thumbnail_xybbea.jpg",
        hover: "https://res.cloudinary.com/dbcek1nhi/image/upload/v1730230774/Greenway_AR_Demo_hzgfvw.gif",
        styleguide: "https://res.cloudinary.com/dbcek1nhi/image/upload/v1723136857/Styleguide_emeaej.png",
        renderGroup2: "https://res.cloudinary.com/dbcek1nhi/image/upload/v1723135569/render_group2_pzvcbu.jpg",
        renderCantilever: "https://res.cloudinary.com/dbcek1nhi/image/upload/v1723135568/render_cantilever_qyggas.jpg",
        renderArchway: "https://res.cloudinary.com/dbcek1nhi/image/upload/v1723135568/render_archway_efapcv.jpg",
        renderSpinning: "https://res.cloudinary.com/dbcek1nhi/image/upload/v1723135567/render_spinning_xdhjfx.jpg",
        symbolGroup2: "https://res.cloudinary.com/dbcek1nhi/image/upload/v1723133029/updated_group2_euiijd.png",
        symbolCantilever: "https://res.cloudinary.com/dbcek1nhi/image/upload/v1723133029/updated_cantilever_o2cgde.png",
        symbolArchway: "https://res.cloudinary.com/dbcek1nhi/image/upload/v1723133414/updated_archway_ebpmsu.png",
        symbolSpinning: "https://res.cloudinary.com/dbcek1nhi/image/upload/v1723133417/updated_spinning_rmdbhm.png",
    },

    clippies: {
        thumbnail: "https://res.cloudinary.com/dbcek1nhi/image/upload/v1718679385/Clippies-thumbnail_spkxv7.jpg",
        hover: "https://res.cloudinary.com/dbcek1nhi/image/upload/v1718679384/Clippies_model_iijpwy.gif",
        rendering: "https://res.cloudinary.com/dbcek1nhi/image/upload/v1727302740/Clippies_Box_Mockup_p8vylc.png",
        sticker: "https://res.cloudinary.com/dbcek1nhi/image/upload/v1718679385/Clippies_sticker_lmb5vf.jpg",
        bags: "https://res.cloudinary.com/dbcek1nhi/image/upload/v1718679384/Clippies_bags_yz892d.jpg",
        ideationClippies: "https://res.cloudinary.com/dbcek1nhi/image/upload/v1723652131/ideation_clippies_jwlhqw.jpg",
        ideationZipvana: "https://res.cloudinary.com/dbcek1nhi/image/upload/v1723651917/ideation_zipvana_tt5tqj.jpg",
        ideationZipzest: "https://res.cloudinary.com/dbcek1nhi/image/upload/v1723651917/ideation_zipzest_fezdxv.jpg",
    },

    reconnecting: {
        thumbnail: "https://res.cloudinary.com/dbcek1nhi/image/upload/v1730217076/Reconnecting-Mockup_wtbyhm.jpg",
        hover: "https://res.cloudinary.com/dbcek1nhi/image/upload/v1730150055/Reconnecting-Thumbnail_tylymd.gif",
        frames: "https://res.cloudinary.com/dbcek1nhi/image/upload/v1730486087/reconnecting-first_f0vd1v.jpg",
        sketches: "https://res.cloudinary.com/dbcek1nhi/image/upload/v1730485377/wireframe-sketches_c8jm9j.png",
        mobile: "https://res.cloudinary.com/dbcek1nhi/image/upload/v1730485377/wireframe-mobile_kdaomx.png",
        desktop: "https://res.cloudinary.com/dbcek1nhi/image/upload/v1730485377/wireframe-desktop_ligkxp.png",
        personaProf: "https://res.cloudinary.com/dbcek1nhi/image/upload/v1730485126/Archetype_2_fbhhoz.jpg",
        personaStudent: "https://res.cloudinary.com/dbcek1nhi/image/upload/v1730485126/Archetype_1_qirrxq.jpg",
    },
    
    wicked: {
        thumbnail: "https://res.cloudinary.com/dbcek1nhi/image/upload/v1723595502/wicked_thumbnail_szezfa.jpg",
        hover: "https://res.cloudinary.com/dbcek1nhi/image/upload/v1723589716/Icon_Animation_lr1wi3.gif",
    },
};

export default images;