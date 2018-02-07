#!/bin/bash
PORT=${1:-80}
set -x
sudo python -m SimpleHTTPServer $PORT
set +x
