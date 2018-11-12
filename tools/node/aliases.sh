function antiphon_init {
    local ANTIPHON_CMD_SELF_DIR="$(dirname $(realpath $BASH_SOURCE))"
    if which winpty &>/dev/null ; then
        local ANTIPHON_CMD_PREFIX="winpty " ;
    fi
    local ANTIPHON_CMD_NODE="${ANTIPHON_CMD_PREFIX}docker run -u \"node\" --network host -it --rm --name npm -v /\"$HOME\"/.docker-npm-global:/home/node/.npm-global -v /\"$HOME\"/.docker-npm:/home/node/.npm -v /\"$PWD\":/usr/src/app -w //usr/src/app --env-file ${ANTIPHON_CMD_SELF_DIR}/env.npm.list node:8.12.0-alpine"
    alias node="${ANTIPHON_CMD_NODE} node"
    alias npm="${ANTIPHON_CMD_NODE} npm"
    alias ng="${ANTIPHON_CMD_NODE} ng"
    alias node_sh="${ANTIPHON_CMD_NODE} sh"
}

antiphon_init
unset -f antiphon_init