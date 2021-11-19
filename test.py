
from utils.decorators import log_with_time


@log_with_time()
def euclid_gcd(p: int, q: int) -> int:
    """
    Compute the greatest common divisor of two non-negative ints p and q
    If q==0, the answer is p. If not, divide p by q and take the remainder r
    The answer is the gcd of q and r
    TC: O[log(min(p,q))]
    SC: O[1]
    """
    while True:
        if q == 0:
            return p
        r = p % q
        p, q = q, r


if __name__ == "__main__":
    a = euclid_gcd(22, 11)
    print(a)

