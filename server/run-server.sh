set -ex
HERE=$(dirname $(realpath $BASH_SOURCE))
cd $HERE

uvicorn server:app --host 0.0.0.0 --port 4505